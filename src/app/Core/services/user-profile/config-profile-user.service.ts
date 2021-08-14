import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigProfileUserService {

  constructor(private http:HttpClient) { }

  url1 = "http://localhost:3000/motoristas/newImage";
  url2 = "";
  url3 = "";
  url4 = "http://localhost:3000/motoristas/obtenerImagenPerfil/61161848989d17a2c802191";



  setNewImageProfile(data:any){
    return this.http.post(this.url1,data);
  }
}
