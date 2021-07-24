import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['register']);
    
  }
  
  ingresar(){
    this.router.navigate(['login']);
    
  }
}
