import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  });


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email?.value == this.user.email && this.password?.value == this.user.password && this.formLogin.valid == true){
      console.log('usuario valido');
      this.route.navigate(['biker']);
    }else{
      console.log(this.formLogin.valid);
      
      this.route.navigate(['login']);
      // this.formLogin.value 

      this.email?.setValue('');
      this.password?.setValue('');

      
    }
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


}
