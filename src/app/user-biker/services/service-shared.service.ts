import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

// Este es un servidor compartido entre los componentes contenidos en la carpeta pages.

@Injectable({
  providedIn: 'root'
})
export class ServiceSharedService {
  @Output() disparadorContenidoOrden: EventEmitter<any> = new EventEmitter();
  data:any;
  constructor() { }

  guardarData(data:any){
    this.data = data;
  }

  dataFull(){
    return this.data;
  }
}
