import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './Core/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component: LandingPageComponent, pathMatch:'full', 
  children:[]
  },
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
