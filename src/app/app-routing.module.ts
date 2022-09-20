import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispticketComponent } from './dispticket/dispticket.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PrintComponent } from './print/print.component';
import { Selectbus1Component } from './selectbus1/selectbus1.component';
import { SelectbusresultComponent } from './selectbusresult/selectbusresult.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
//   { path:'footer', component:FooterComponent},
//   {path:'',component:SelectseatComponent
// },

{ path:'head', component:HeaderComponent},
   { path:'bus', component:Selectbus1Component},
    { path:'', component:LoginComponent},
    { path:'signup', component:SignupComponent},

  { path:'res', component:SelectbusresultComponent},
  { path:'selSeat', component:SelectseatComponent},
  {path:'footer', component:FooterComponent},
 
  {path:'print', component:PrintComponent},
  {path:'dispticket',component:DispticketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
