import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from '../../services/service-shared.service';
import { FormControl, Validators } from '@angular/forms';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders-taken',
  templateUrl: './orders-taken.component.html',
  styleUrls: ['./orders-taken.component.sass']
})
export class OrdersTakenComponent implements OnInit {
  codeForm = new FormControl('',[Validators.required, Validators.pattern('([0-9]){4}$')]);
  existData:boolean = false;
  existSelectOrden = false
  ordenTaken = {
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
        unidades: "",
        nombreProducto: "",
        precio: 0
    }],
    totalCostoOrden: 0,
    ubicacionEntrega: "",
    _idEmpresaDistribuye: "",
    informacionPago:{numeroAutorizacionPago:0}
  };
  costClear = "";
  coordinatesOrden:string[]=[];

  title = "Ubicacion";

  position = {
    lat: 14.0839053,
    lng: -87.2224848 
  }
  

  label = {
    color: 'red',
    text: 'Marcador'
  }
  constructor(private serviceShared:ServiceSharedService, private ordenesService:OrdenesService, private route:Router) { }

  ngOnInit(): void {
    // this.serviceShared.disparadorContenidoOrden.subscribe(data =>{
      
    //   if(this.existData == false){

    //     this.existData = true;
    //     console.log(this.existData);
    //   }
    // });
    // this.ordenSelect = this.serviceShared.dataFull();

    this.verifyOrdersTaken();

  }

  get dato(){
    return this.ordenTaken['nombreCliente'].length;
  }

  get state(){
    return this.ordenTaken.estadoOrden;
  }
  
  stateOrdenTaken(estado:string){
    this.ordenTaken.estadoOrden = estado;
  }

  get codigoverificacion(){
    return this.ordenTaken.informacionPago.numeroAutorizacionPago;
  }

  /* CAMBIAMOS EL ESTADO DE LA ORDEN, A ENTREGADA. */
  sucessOrden(){
    // // console.log(this.ordenSelect.nombreCliente.length);
    // this.ordenTaken.estadoOrden = 'entregada';
    // this.serviceShared.addOrdenTerminada(this.ordenTaken);

    this.ordenesService.updateStateOrdenTaken({idOrden:this.ordenTaken._id,estado:'Entregada'}).subscribe(res =>{
      // console.log(res);
      this.ngOnInit();
      this.existSelectOrden = false;
      this.route.navigate(['/biker/ordersAvailable'])
    })

  }

  /* VERIFICAMOS SI EL MOTORISTA CUENTA CON UNA ORDEN TOMADA, DE NO SER ASI, INVITAMOS A QUE TOME ALGUNA. */
  verifyOrdersTaken(){
    let user = `${window.localStorage.getItem('user')}`;

    this.ordenesService.cuentaConOrdenTomada(user).subscribe(res =>{
      this.existSelectOrden = res.result;
      
      // console.log(this.existSelectOrden);
      /* SI EXISTE UNA ORDEN TOMADA ACTUALMENTE PARA SU ENTREGA, LA BUSCAMOS PARA MOSTRARLA */
      if(this.existSelectOrden){
        this.getNowOrdenTaken(user);
      }

    });
  }

  /* OBTENEMOS LA ORDEN TOMADA, PARA SU PRONTA ENTREGA ACTUALMENTE */
  getNowOrdenTaken(user:string){

    this.ordenesService.ordenTakenNow(user).subscribe(result =>{
      // console.log(result);
      
      this.ordenTaken = result;
      this.coordinatesOrden = this.ordenTaken.coordenadasUbicacionOrden.split(",")
      this.position.lat = parseFloat(this.coordinatesOrden[0])  
      this.position.lng = parseFloat(this.coordinatesOrden[1])  
      /* FORMATEAMOS EL COSTO, PARA MOSTRARLO */
      this.clearCost(this.ordenTaken.totalCostoOrden);
      console.log(this.ordenTaken.informacionPago.numeroAutorizacionPago);
      // console.log(this.ordenTaken);
      

    })
  }

  

  clearCost(numb:number){

    let temp = numb.toLocaleString();
    let num = '';
    if(numb.toLocaleString().length >3){
      let cont = 0;
      for(let j=numb.toLocaleString().length-1;j>=0;j--){
        if(cont!= 2){
          num = temp[j] + num ;
          cont= cont +1;
        }else if(cont == 2){
          num = ","+ temp[j]+num;
          cont =0; 
        }
        
      }
    
    num = num + '.00';
    this.costClear = num;
  }else{
    num = numb + '.00';
    this.costClear = num;
    }
    
  }
}
