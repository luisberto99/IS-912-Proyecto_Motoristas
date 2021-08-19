import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from './../../services/service-shared.service';
import { OrdersAvailableService } from './service-biker-no-verify/orders-available.service';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';


@Component({
  selector: 'app-orders-available',
  templateUrl: './orders-available.component.html',
  styleUrls: ['./orders-available.component.sass']
})
export class OrdersAvailableComponent implements OnInit {
  viewProducto:boolean = false;
  data = this.serviceBikerNoVerify.data();
  
  selectOrden:boolean = false;
  userBikerVerify = true;

  ordenView = {
    ubicacionEntrega: '',
    nombreCliente:'',
    nombreEmpresaDistribuye: " ",
    productosOrden: [{
      id:'',
      idProducto:'',
      nombreProducto: "",
      cantidad:"",
    }],
    estadoOrden: ""
  }

  ordenes = [{
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
   
  }]

  title = "Ubicacion";

  position = {
    lat: 14.0766772,
    lng: -87.2007709

  }

  label = {
    color: 'red',
    text: 'Marcador'
  }
  constructor(private serviceBikerNoVerify: OrdersAvailableService, 
              private serviceShared:ServiceSharedService,
              private ordenesService:OrdenesService) { }

  ngOnInit(): void {
  // console.log(this.data);

    this.ordenesService.getOrdenesDisponbiles().subscribe(result =>{
      // console.log(result);
      
      this.ordenes = result;
      
    })

    this.verifyUser();

    this.verifyOrdersTaken();
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

  verifyUser(){
    let user = `${window.localStorage.getItem('user')}`;

    this.ordenesService.estadoMotorista(user).subscribe(res =>{
      if(res.result){
        this.userBikerVerify = true;
      }else{
        this.userBikerVerify = false;

      }
      
    })
    
  }

  verifyOrdersTaken(){
    let user = `${window.localStorage.getItem('user')}`;

    this.ordenesService.cuentaConOrdenTomada(user).subscribe(res =>{
      this.selectOrden = res.result;
      
    });
  }

  getOrden(orden:any){
    let user = `${window.localStorage.getItem('user')}`;
    console.log(orden._id);
    
    this.ordenesService.obtenerDatosMotorista(user).subscribe(res =>{

      this.ordenesService.asignarMotoristaOrden({idMotorista:user,
        nombreMotorista:res.primerNombre,
        apellido:res.primerApellido,
        idOrden:orden._id}).subscribe(result =>{
          console.log(result);
          
          this.ngOnInit();
        })

    })
  }
}
