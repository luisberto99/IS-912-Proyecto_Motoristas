import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from './../../services/service-shared.service';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.sass']
})
export class OrdersDeliveredComponent implements OnInit {
  ordenesTerminadas:any = [{
    _id: "",
    comisionAdministrador: "",
    comisionMotorista: 2,
    coordenadasUbicacionOrden: "",
    estadoOrden: "",
    fechaOrden: "",
    impuestoOrden: 0,
    nombreCliente: "",
    nombreEmpresaDistribuye: " ",
    productosOrden: [{
        cantidad: "",
        nombreProducto: "",
        precio: 0
    }],
    totalCostoOrden: 0,
    ubicacionEntrega: "",
    _idEmpresaDistribuye: "",
    informacionPago:{numeroAutorizacionPago:0}
  }];
  user = "";
  constructor( private serviceShared: ServiceSharedService,
              private ordersService:OrdenesService
    ) { }

  ngOnInit(): void {
    // this.ordenesTerminadas = this.serviceShared.getOrdenesTerminadas()
    // console.log(this.ordenesTerminadas);
   
    this.user = `${window.localStorage.getItem('user')}`;

    this.ordersService.ordersDeliveredBiker(this.user).subscribe(res =>{
      this.ordenesTerminadas = res;
      console.log(this.ordenesTerminadas);
    });
    
  }



}
