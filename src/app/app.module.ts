import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Core/landing-page/landing-page.component';
import { RegisterComponent } from './Core/register/register.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Core/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
