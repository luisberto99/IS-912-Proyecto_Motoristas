import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBikerRoutingModule } from './user-biker-routing.module';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { OrdersTakenComponent } from './pages/orders-taken/orders-taken.component';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';


@NgModule({
  declarations: [
    OrdersAvailableComponent,
    OrdersTakenComponent,
    OrdersDeliveredComponent
  ],
  imports: [
    CommonModule,
    UserBikerRoutingModule
  ]
})
export class UserBikerModule { }
