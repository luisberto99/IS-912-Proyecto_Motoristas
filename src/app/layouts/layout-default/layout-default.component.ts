import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.sass']
})
export class LayoutDefaultComponent implements OnInit {
  optionSelect:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  option(num:number){
    this.optionSelect = num
  }
}
