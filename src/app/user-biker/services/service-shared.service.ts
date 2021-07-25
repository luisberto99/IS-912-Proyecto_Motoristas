import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

// Este es un servidor compartido entre los componentes contenidos en la carpeta pages.

@Injectable({
  providedIn: 'root'
})
export class ServiceSharedService {
  @Output() disparadorContenidoOrden: EventEmitter<any> = new EventEmitter();
  data:any;
  
  ordenesEntregadas:any = [{
    id: "7",
    idOrden: "",
    idCliente: '',
    ubicacionEntrega: "Barrio agua dulce",
    nombreCliente: "Jose Luis",
    coordenadas: "",
    fechaRealizada:'24/7/2021',
    informacionPago:[],
    codigoVerificacion: '1111',
    productos: [{
        id:'',
        idProducto:'',
        nombreProducto: "Computadora Asus",
        cantidad:"1",
        empresaDistribuye: "Curacao",
        idEmpresaDistribuye: "12"
    }, {
      id:'',
      idProducto:'',
      nombreProducto: "Cargador Laptop",
      cantidad:"1",
      empresaDistribuye: "Jestereo",
      idEmpresaDistribuye: "16"
  }], 
    nota: "",
    estadoOrden: "entregada",
    Motorista:''
  }];
  constructor() { }

  guardarData(data:any){
    this.data = data;
  }

  dataFull(){
    return this.data;
  }

  addOrdenTerminada(data:any){
    this.ordenesEntregadas.push(data);
  }

  getOrdenesTerminadas(){
    return this.ordenesEntregadas;
  }
}
