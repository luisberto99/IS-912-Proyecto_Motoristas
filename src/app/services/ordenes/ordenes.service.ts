import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {


  
  constructor(private http:HttpClient) { }

  getOrdenesDisponbiles(){
    return this.http.get<any>("http://localhost:3000/ordenes/disponibles");
  }

  estadoMotorista(id:string){
    
    let url = `http://localhost:3000/motoristas/${id}/estadoVeficado`
    return this.http.get<any>(url);
  }

  cuentaConOrdenTomada(idMotorista:string){
    let url = `http://localhost:3000/ordenes/${idMotorista}/verificarOrdenMotorista`;
    return this.http.get<any>(url);
  }

  asignarMotoristaOrden(data:any){
    let url = "http://localhost:3000/ordenes/asignarMotorista"
    return this.http.put<any>(url,data);
  }

  obtenerDatosMotorista(id:string){
    let url= `http://localhost:3000/motoristas/obtenerMotorista/${id}`;
    return this.http.get<any>(url);
  }

  ordenTakenNow(idMotorista:string){
    let url= `http://localhost:3000/ordenes/ordenTomadaMotorista/${idMotorista}`;
    return this.http.get<any>(url);

  }

  updateStateOrdenTaken(data:any){
    let url= `http://localhost:3000/ordenes/updateOrden`;
    return this.http.put<any>(url,data);
  }
}
