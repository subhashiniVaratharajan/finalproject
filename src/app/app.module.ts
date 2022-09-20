import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookedComponent } from './booked/booked.component';
import { DispticketComponent } from './dispticket/dispticket.component';
import { PrintComponent } from './print/print.component';
import { SelectbusComponent } from './selectbus/selectbus.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { SelectbusresultComponent } from './selectbusresult/selectbusresult.component';
import { Selectbus1Component } from './selectbus1/selectbus1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookedComponent,
    DispticketComponent,
    PrintComponent,
    SelectbusComponent,
    SelectseatComponent,
    SelectbusresultComponent,
    Selectbus1Component,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
