import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({
    primerNombre: new FormControl("",[Validators.required, Validators.maxLength(20)]),
    primerApellido: new FormControl("",[Validators.required, Validators.maxLength(20)]),
    identidad: new FormControl("",[Validators.required, Validators.pattern('^([0-9]){13}$')]),
    domicilio: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    telefono: new FormControl("",[Validators.required, Validators.maxLength(8)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    passwordConfirm: new FormControl("",[Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    
  });
  constructor() { }

  ngOnInit(): void {
  }



  registrar(){
    console.log(this.formRegister.value);
    console.log(this.formRegister.valid);
    
  }

  get identidad(){
    return this.formRegister.get('identidad');
  }

  get password(){
    return this.formRegister.get('password');
  }

  get passwordConfirm(){
    return this.formRegister.get('passwordConfirm')?.value;
  }

  get email(){
    return this.formRegister.get('email');
  }

  get telefono(){
    return this.formRegister.get('telefono');
  }

  get name(){
    return this.formRegister.get('primerNombre');
  }
  get apellido(){
    return this.formRegister.get('primerApellido');
  }
}
