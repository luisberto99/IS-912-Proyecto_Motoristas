import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersAvailableService {
  ordenes = [{
    id: "1",
    idOrden: "",
    idCliente: '',
    ubicacionEntrega: "Col. Aleman",
    nombreCliente: "Jose",
    coordenadas: "",
    fechaRealizada:'25/7/2021',
    informacionPago:[],
    codigoVerificacion: '1111',
    productos: [{
        id:'',
        idProducto:'',
        nombreProducto: "Computadora Acer",
        cantidad:"1",
        empresaDistribuye: "Curacao",
        idEmpresaDistribuye: "12"
    }, {
      id:'',
      idProducto:'',
      nombreProducto: "Cargador Laptop",
      cantidad:"1",
      empresaDistribuye: "Curacao",
      idEmpresaDistribuye: "12"
  }], 
    nota: "",
    estadoOrden: "",
    Motorista:''
  },{
    id: "2",
    idOrden: "",
    idCliente: '',
    ubicacionEntrega: "Col. Trapiche",
    nombreCliente: "Luis",
    coordenadas: "",
    fechaRealizada:'25/7/2021',
    informacionPago:[],
    codigoVerificacion: '1111',
    productos: [{
        id:'',
        idProducto:'',
        nombreProducto: "Pizza sencilla",
        cantidad:"2",
        empresaDistribuye: "Pizza hut",
        idEmpresaDistribuye: "12"
    },{
      id:'',
      idProducto:'',
      nombreProducto: "Pizza suprema",
      cantidad:"2",
      empresaDistribuye: "Pizza hut",
      idEmpresaDistribuye: "12"
    },{
      id:'',
      idProducto:'',
      nombreProducto: "Refrescos 3ltrs.",
      cantidad:"6",
      empresaDistribuye: "Circle key",
      idEmpresaDistribuye: "13"
    }
    ], 
    nota: "",
    estadoOrden: "",
    Motorista:''
  },{
    id: "3",
    idOrden: "",
    idCliente: '',
    ubicacionEntrega: "Col. Buenos Aires",
    nombreCliente: "Leo",
    coordenadas: "",
    fechaRealizada:'25/7/2021',
    informacionPago:[],
    codigoVerificacion: '1111',
    productos: [{
        id:'',
        idProducto:'',
        nombreProducto: "Medicamento ABC",
        cantidad:"2",
        empresaDistribuye: "Farmacia Kielsa",
        idEmpresaDistribuye: "14"
    }],
    nota: "",
    estadoOrden: "",
    Motorista:''
},{
  id: "4",
  idOrden: "",
  idCliente: '',
  ubicacionEntrega: "Comayaguela Sur",
  nombreCliente: "Maria",
  coordenadas: "",
  fechaRealizada:'25/7/2021',
  informacionPago:[],
  codigoVerificacion: '1111',
  productos: [{
      id:'',
      idProducto:'',
      nombreProducto: "Cafetera",
      cantidad:"1",
      empresaDistribuye: "Diusa",
      idEmpresaDistribuye: "15"
    },{
      id:'',
      idProducto:'',
      nombreProducto: "Plancha",
      cantidad:"3",
      empresaDistribuye: "Diusa",
      idEmpresaDistribuye: "15"
    },{
      id:'',
      idProducto:'',
      nombreProducto: "Focos",
      cantidad:"2",
      empresaDistribuye: "Diunsa",
      idEmpresaDistribuye: "15"
    }
  ], 
  nota: "",
  estadoOrden: "",
  Motorista:''
}];

  constructor() { }

  data(){
    return this.ordenes;
  }
}
