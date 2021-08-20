import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.sass']
})
export class LayoutDefaultComponent implements OnInit {
  optionSelect:number = 1;
  goProfileNow=false;
  imgProfileBiker = "/assets/imgs/user.png";
  constructor(private route:Router, private ordersService:OrdenesService) { }

  ngOnInit(): void {
    let user = `${window.localStorage.getItem('user')}`;

    this.ordersService.getImgProfile(user).subscribe(res =>{
      // console.log(res);
      if( res.imagenPerfil != ""){

        this.imgProfileBiker = res.imagenPerfil;
      }
    })
  }

  option(num:number){
    this.optionSelect = num
  }

  goProfile(){
    this.route.navigate(['/biker/profile']);
  }

  goConfigProfile(){
    this.goProfileNow = true;
  }
  
  return(){

    this.goProfileNow = false;

    // this.route.navigate(['/biker/ordersAvailable']);

  }
}
