import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfigProfileUserService } from 'src/app/Core/services/user-profile/config-profile-user.service';
@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.sass']
})
export class UserProfileSettingsComponent implements OnInit {
  imgProfile:string = 'assets/imgs/avatar.png';
  clickBtn:number = 0;
  previsualizacion:any = '';
  newImageSave:any="";
  constructor(private sanitizer: DomSanitizer, private route:Router, private userConfigService:ConfigProfileUserService) { }

  ngOnInit(): void {
  }

  return(){
    this.route.navigate(['/biker/ordersTaken']);
  }

  imgsUpload(event:any){

    var data:File = event.target.files[0];
    this.newImageSave = data;
    var binaryData = [];
    binaryData.push(data);
    const a = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
    const image = this.sanitizer.bypassSecurityTrustUrl(a);
    this.previsualizacion = image;
  }


  goPhotoProfile(){
    this.clickBtn = 1;
  }
  
  goProfile(){
    this.clickBtn = 2;
    
  }

  goSecurityProfile(){
    this.clickBtn = 3;
  }

  saveNewImg(){
    if(this.newImageSave != ""){
      console.log(this.newImageSave);
      let localStorage = window.localStorage
      let idBiker = localStorage.getItem("user")?.toString();
      this.userConfigService.setNewImageProfile({idUser:idBiker,imagen:this.newImageSave}).subscribe(result =>{
        console.log(result);
        this.clickBtn = 0;
      })
    }else{
      alert("Agregue una nueva imagen de perfil, para realizar los cambios.")
    }
  }
}
