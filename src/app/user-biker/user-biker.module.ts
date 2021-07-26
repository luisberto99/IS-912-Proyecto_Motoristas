import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBikerRoutingModule } from './user-biker-routing.module';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { OrdersTakenComponent } from './pages/orders-taken/orders-taken.component';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserProfileSettingsComponent } from './pages/user-profile-settings/user-profile-settings.component';

@NgModule({
  declarations: [
    OrdersAvailableComponent,
    OrdersTakenComponent,
    OrdersDeliveredComponent,
    UserProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    UserBikerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserBikerModule { }
