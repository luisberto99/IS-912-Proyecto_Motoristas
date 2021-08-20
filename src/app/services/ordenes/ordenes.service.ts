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
  /* ASIGNAR MOTORISTA A ORDEN DISPONIBLE */
  asignarMotoristaOrden(data:any){
    let url = "http://localhost:3000/ordenes/asignarMotorista"
    return this.http.put<any>(url,data);
  }

  /* OBTENER IFNROMACION RELEVANTE DEL MOTORISTA */
  obtenerDatosMotorista(id:string){
    let url= `http://localhost:3000/motoristas/obtenerMotorista/${id}`;
    return this.http.get<any>(url);
  }

  /* OBTENER LA ORDEN TOMADA (DE EXISTIR),PARA MOSTRARLA */
  ordenTakenNow(idMotorista:string){
    let url= `http://localhost:3000/ordenes/ordenTomadaMotorista/${idMotorista}`;
    return this.http.get<any>(url);

  }

  /* ACTUALIZAR EL ESTADO DE UNA ORDEN */
  updateStateOrdenTaken(data:any){
    let url= `http://localhost:3000/ordenes/updateOrden`;
    return this.http.put<any>(url,data);
  }

  /* OBTENER ORDENES ENTREGADAS DE UN MOTORISTA */
  ordersDeliveredBiker(idMotorista:string){
    let url= `http://localhost:3000/ordenes/ordenesEntregadas/${idMotorista}`;
    return this.http.get<any>(url);
  }

}

