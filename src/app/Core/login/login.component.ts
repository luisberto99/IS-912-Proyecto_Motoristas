import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterLoginService } from 'src/app/services/register-login/register-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user:any = {
    email: 'luisbanegas@gmail.com',
    password: 'Dw2021##'
  }
  viewErrorLogin = false;

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  });


  constructor(private route:Router, private loginService:RegisterLoginService) { }

  ngOnInit(): void {
  }

  login(){
    // if(this.email?.value == this.user.email && this.password?.value == this.user.password && this.formLogin.valid == true){
    //   console.log('usuario valido');
    //   this.route.navigate(['biker']);
    // }else{
    //   console.log(this.formLogin.valid);
      
    //   this.route.navigate(['login']);
    //   // this.formLogin.value 
    //   this.email?.setValue('');
    //   this.password?.setValue('');
    // }

    this.loginService.verificarExisteCuenta(this.email?.value).subscribe(result =>{
      // console.log(result);
      if(result){

        this.loginBiker();

      }else{
        this.email?.setValue('');
        this.password?.setValue('');
        this.viewErrorLogin = true;
      }
    })

  }

  recoverPassword(){
    console.log('recuperar contraseña');
  }

  get email(){
    return this.formLogin.get('email');
  }

  get password(){
    return this.formLogin.get('password');
  }

  loginBiker(){
    this.loginService.login({email:this.email?.value,password:this.password?.value}).subscribe(res =>{
      // console.log(res, "login");
      if(res.result){
        let localStorage = window.localStorage;
        localStorage.setItem('user',res.id);
        this.formLogin.reset();
        this.route.navigate(['/biker/ordersAvailable']);
      }else{
        this.viewErrorLogin = true;
        this.formLogin.reset();
      }
      
    })
  }

}
