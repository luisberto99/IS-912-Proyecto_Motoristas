import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from './../../services/service-shared.service';
import { OrdersAvailableService } from './service/orders-available.service';

@Component({
  selector: 'app-orders-available',
  templateUrl: './orders-available.component.html',
  styleUrls: ['./orders-available.component.sass']
})
export class OrdersAvailableComponent implements OnInit {
  viewProducto:boolean = false;
  data = this.serviceOA.data();
  selectOrden:boolean = false;

  ordenView = {
    ubicacionEntrega: '',
    nombreCliente:'',
    productos: [{
      id:'',
      idProducto:'',
      nombreProducto: "",
      cantidad:"",
      empresaDistribuye: "",
      idEmpresaDistribuye: "",
      estadoOrden: ""
  }]
  }

  constructor(private serviceOA: OrdersAvailableService, private serviceShared:ServiceSharedService) { }

  ngOnInit(): void {
  }

  viewDetail(orden:any){
    this.viewProducto = true;
    this.ordenView = orden;
    
  }
  
  tomarOrden(ordenView:any){
    ordenView.estadoOrden= 'tomada';
    this.serviceShared.disparadorContenidoOrden.emit(ordenView);
    this.serviceShared.guardarData(ordenView);
    this.selectOrden= true;
  }
  
  return(){
    this.viewProducto = false; 
  }

}
