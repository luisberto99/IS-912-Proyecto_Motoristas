import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.sass']
})
export class LayoutDefaultComponent implements OnInit {
  optionSelect:number = 0;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  option(num:number){
    this.optionSelect = num
  }

  goProfile(){
    this.route.navigate(['/biker/profile']);
  }
}
