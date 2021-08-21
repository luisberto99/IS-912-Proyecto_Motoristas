import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http:HttpClient) { }

  urlRegistrar = "http://localhost:3000/motoristas/registrar";
  urlLogin = "http://localhost:3000/motoristas/login"

  registrarNuevoMotorista(data:any){
    return this.http.post<any>(this.urlRegistrar,data)
  }

  verificarExisteCuenta(email:string){
    let url = `http://localhost:3000/motoristas/obtenerDatos/${email}`;
    return this.http.get<Boolean>(url);
  }

  login(data:any){
    return this.http.post<any>(this.urlLogin,data);
  }

  actualizarEstadoMotorista(data:any){
    let url = "http://localhost:3000/motoristas/actualizarEstadoo"
    return this.http.put<any>(url,data);
  }

}
