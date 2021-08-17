import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http:HttpClient) { }

  urlRegistrar = "http://localhost:3000/motoristas/registrar";

  registrarNuevoMotorista(data:any){
    return this.http.post<any>(this.urlRegistrar,data)
  }

}
