import { Component, OnInit } from '@angular/core';
import { ServiceSharedService } from '../../services/service-shared.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders-taken',
  templateUrl: './orders-taken.component.html',
  styleUrls: ['./orders-taken.component.sass']
})
export class OrdersTakenComponent implements OnInit {
  
  codeForm = new FormControl('',[Validators.required, Validators.pattern('([0-9]){4}$')]);
  existData:boolean = false;

  ordenSelect = {
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

  constructor(private serviceShared:ServiceSharedService) { }

  ngOnInit(): void {
    this.serviceShared.disparadorContenidoOrden.subscribe(data =>{
      
      if(this.existData == false){

        this.existData = true;
        console.log(this.existData);
      }
      
        
    });

    this.ordenSelect = this.serviceShared.dataFull();
  }

  get dato(){
    return this.ordenSelect['nombreCliente'].length;
  }

  sucessOrden(){
    console.log(this.ordenSelect.nombreCliente.length);
    
  }
}
