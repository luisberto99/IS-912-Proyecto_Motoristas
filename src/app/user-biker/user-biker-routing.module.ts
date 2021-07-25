import { OrdersTakenComponent } from './pages/orders-taken/orders-taken.component';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';

const routes: Routes = [

  {path:'',
  children:[
    {path:'', redirectTo:'ordersAvailable',pathMatch:'full'},
    {path:'ordersAvailable', component: OrdersAvailableComponent},
    {path:'ordersTaken', component: OrdersTakenComponent},
    {path:'ordersDelivered', component: OrdersDeliveredComponent},
    {path:'**', redirectTo:'ordersAvailable'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBikerRoutingModule { }
