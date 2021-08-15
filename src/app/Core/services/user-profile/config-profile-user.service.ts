import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigProfileUserService {

  constructor(private http:HttpClient) { }

  url1 = "http://localhost:3000/motoristas/newImage";
  url2 = "http://localhost:3000/motoristas/configuracion/cambiarCorreo";
  url3 = "http://localhost:3000/motoristas/nuevaContrasena";
  url4 = "http://localhost:3000/motoristas/";



  getImgProfile(dateurl:string){
    dateurl = dateurl.split('"')[1]
    let url = `http://localhost:3000/motoristas/obtenerImagenPerfil/${dateurl}`
    return this.http.get<any>(url);
  }

  setNewImageProfile(data:any){
    return this.http.post(this.url1,data);
  }

  getInfoBiker(dateurl:string){
    dateurl = dateurl.split('"')[1];
    let url = `http://localhost:3000/motoristas/obtenerMotorista/${dateurl}`;
    return this.http.get<any>(url);
  }


  putEmail(data:any){
    
    return this.http.put(this.url2,data);
  }

  putPassword(data:any){
    return this.http.put(this.url3,data);
  }
}
