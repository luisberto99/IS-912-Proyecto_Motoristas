import { biker } from 'src/app/Core/models/user-profile/modelsUserProfile';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfigProfileUserService } from 'src/app/Core/services/user-profile/config-profile-user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RegisterLoginService } from 'src/app/services/register-login/register-login.service';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.sass']
})
export class UserProfileSettingsComponent implements OnInit {
  imgProfile:any = 'assets/imgs/user.png';
  clickBtn:number = 0;
  previsualizacion:any = '';
  newImageSave:any=new FormData();
  viewInputEmail = false;
  newEmail = new FormControl('',[Validators.email,Validators.required]);
  // infoBiker!:biker;
  infoBiker:biker = {
    primerNombre:"",
    primerApellido:"",
    email:"",
    domicilio:""
  };

  formPutPassword = new FormGroup({
    
    passBiker: new FormControl("",[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    newPassword: new FormControl("",[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    newPasswordConfirm: new FormControl("",[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  });

  constructor(private sanitizer: DomSanitizer, private route:Router, private userConfigService:ConfigProfileUserService, private  userService:RegisterLoginService) { }

  ngOnInit(): void {
    
    this.loadInfoBiker();
    this.upImgProfile();
  }

  return(){
    this.route.navigate(['/biker/ordersTaken']);
  }

  imgsUpload(event:any){

    var data:File = event.target.files[0];
    var binaryData = [];
    binaryData.push(data);
    
    /* convertiendo a base 64 la imagen. */
    const filereader = new FileReader();
    filereader.readAsDataURL(data);
    
    
    filereader.onload = () => {
      this.newImageSave= filereader.result;
      
    };
    
    const a = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
    const image = this.sanitizer.bypassSecurityTrustUrl(a);
    this.previsualizacion = image;
    
  }


  goPhotoProfile(){
    if(this.clickBtn == 1){

      this.clickBtn = 0;
    }else{

      this.clickBtn = 1;
    }
  }
  
  goProfile(){
    if(this.clickBtn == 2){
      this.clickBtn = 0;
    }else{
      this.clickBtn = 2;
    }
  }

  goSecurityProfile(){
    if(this.clickBtn == 3){
      this.clickBtn = 0;

    }else{
      this.clickBtn = 3;
    }
  }

  saveNewImg(){
    if(this.previsualizacion != ""){
      // console.log(this.newImageSave);
      let localStorage = window.localStorage
      let idBiker = localStorage.getItem("user")?.toString();

      /* Visualizar la img en base 64 */
      // console.log(this.newImageSave);
      this.userConfigService.setNewImageProfile({idUser:idBiker,imagen:this.newImageSave}).subscribe(result =>{
        console.log(result);
        this.clickBtn = 0;
        this.ngOnInit();
      })
    }else{
      alert("Agregue una nueva imagen de perfil, para realizar los cambios.")
    }
  }

  getIdBiker():string{
    let localStorage = window.localStorage
    let idBiker:string = JSON.stringify(localStorage.getItem("user"));
    return idBiker;
  }

  upImgProfile(){
    let a = {
      _id:"",
      imagenPerfil:""
    }
    this.userConfigService.getImgProfile(this.getIdBiker()).subscribe(results =>{
      a = results;
      this.imgProfile = a.imagenPerfil;
    })
  }

  loadInfoBiker(){
    this.userConfigService.getInfoBiker(this.getIdBiker()).subscribe(result =>{

      this.infoBiker = result;
      // console.log(this.infoBiker);
    })
  }

  viewInputNewEmail(){
    this.viewInputEmail = true;
  }

  saveNewEmail(){
    if(this.newEmail.valid){
      let id = this.getIdBiker().split('"')[1];

      
      this.userConfigService.putEmail({email:this.newEmail.value,idUser:id}).subscribe(result=>{
        // console.log(result);

        this.ngOnInit();
      })

      this.newEmail.reset();
      this.clickBtn = 0; 

    }else{
      alert("correo invalido");
    }
    
  }

  saveNewPassword(){
    if(this.formPutPassword.valid){
      
      // console.log(this.passBiker?.value,this.newPassword?.value);
      let id = this.getIdBiker().split('"')[1];

      this.userConfigService.putPassword({idBiker:id,password:this.passBiker?.value,newPassword:this.newPassword?.value}).subscribe(result=>{
        console.log(result);
        
      });

      this.passBiker?.reset();
      this.newPassword?.reset();
      this.newPasswordConfirm?.reset();
      
    }else{
      alert("Contraseña ingresada no valida.")
    }

  }

  get passBiker(){
    return this.formPutPassword.get('passBiker');
  }
  get newPassword(){
    return this.formPutPassword.get('newPassword');
  }
  get newPasswordConfirm(){
    return this.formPutPassword.get('newPasswordConfirm');
  }

  exit(){
    let user = `${window.localStorage.getItem('user')}`;

    this.userService.actualizarEstadoMotorista({id:user,estado:'Desconectado'}).subscribe(res =>{
      console.log(res);
      
    });

    this.route.navigate(['/'])
  } 
}
