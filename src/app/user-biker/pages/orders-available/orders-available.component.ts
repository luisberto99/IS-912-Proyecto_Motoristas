import { OrdersAvailableService } from './service/orders-available.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-available',
  templateUrl: './orders-available.component.html',
  styleUrls: ['./orders-available.component.sass']
})
export class OrdersAvailableComponent implements OnInit {
  viewProducto:boolean = false;
  data = this.serviceOA.data()
  ordenView = {
    ubicacionEntrega: '',
    nombreCliente:'',
    productos: [{
      id:'',
      idProducto:'',
      nombreProducto: "",
      cantidad:"",
      empresaDistribuye: "",
      idEmpresaDistribuye: ""
  }]
}




  constructor(private serviceOA: OrdersAvailableService) { }

  ngOnInit(): void {
  }

  viewDetail(orden:any){
    this.viewProducto = true;
    this.ordenView = orden;
    // console.log(orden);
    
  }
  
  tomarOrden(ordenView:any){
    console.log(ordenView);
    // this.a = JSON.parse(this.a);
    // console.log(this.data[0].productos[0]);
    
  }
  
  return(){
    this.viewProducto = false;
    
  }

}
