import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({
    primerNombre: new FormControl("",[Validators.maxLength(20)]),
    primerApellido: new FormControl("",[Validators.maxLength(20)]),
    identidad: new FormControl("",[Validators.maxLength(13)]),
    domicilio: new FormControl("",[Validators.maxLength(40)]),
    telefono: new FormControl("",[Validators.maxLength(40)]),
    email: new FormControl("",[Validators.email]),
    password: new FormControl("",[]),
    passwordConfirm: new FormControl("",[]),
    
  });
  constructor() { }

  ngOnInit(): void {
  }



  registrar(){
    console.log(this.formRegister.value);
    
  }

}
