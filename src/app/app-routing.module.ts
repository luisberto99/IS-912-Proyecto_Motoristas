import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './Core/landing-page/landing-page.component';
import { RegisterComponent } from './Core/register/register.component';
import { LoginComponent } from './Core/login/login.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'biker', component: LayoutDefaultComponent,
  loadChildren: () => import('./user-biker/user-biker.module').then(m => m.UserBikerModule)
  },
  {path:'',component: LandingPageComponent, pathMatch:'full' },
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
