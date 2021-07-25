import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from './../../services/service-shared.service';


@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.sass']
})
export class OrdersDeliveredComponent implements OnInit {
  ordenTerminada = {
    id: "",
    idOrden: "",
    idCliente: '',
    ubicacionEntrega: "",
    nombreCliente: "a",
    coordenadas: "",
    fechaRealizada:'',
    informacionPago:[],
    codigoVerificacion: 1,
    productos: [{
        id:'',
        idProducto:'',
        nombreProducto: "",
        cantidad:"",
        empresaDistribuye: "",
        idEmpresaDistribuye: ""
    }], 
    nota: "",
    estadoOrden: "",
    Motorista:''
  };

  constructor( private serviceShared: ServiceSharedService) { }

  ngOnInit(): void {
    this.ordenTerminada = this.serviceShared.dataFull()
  }

}
