import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './Core/landing-page/landing-page.component';
import { RegisterComponent } from './Core/register/register.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'',component: LandingPageComponent, pathMatch:'full' },
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
