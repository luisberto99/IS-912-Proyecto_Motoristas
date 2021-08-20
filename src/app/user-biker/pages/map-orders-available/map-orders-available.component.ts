import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-orders-available',
  templateUrl: './map-orders-available.component.html',
  styleUrls: ['./map-orders-available.component.sass']
})
export class MapOrdersAvailableComponent implements OnInit {

  @Input() lat:any;
  @Input() long:any;

  title = "Ubicacion";

  position = {
    lat: 14.0766772,
    lng: -87.2007709

  }

  label = {
    color: 'red',
    text: 'Marcador'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.lat,this.long);
    this.position.lat = this.lat;
    this.position.lng = this.long;
  }

}
