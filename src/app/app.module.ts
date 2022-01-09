import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { RegesterComponent } from './regester/regester.component';
import { AfficheregsterComponent } from './admin/afficheregster/afficheregster.component';


import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { CustomFormsModule } from 'ng2-validation';
import { NavbarAdComponent } from './admin/navbar-ad/navbar-ad.component';
import { UpdateregesterComponent } from './admin/updateregester/updateregester.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { HomeserviceComponent } from './homeservice/homeservice.component';
import { AfficheajouteserviceComponent } from './admin/afficheajouteservice/afficheajouteservice.component';
import { UpdateajouerserviceComponent } from './admin/updateajouerservice/updateajouerservice.component';
import { AffichecontactComponent } from './admin/affichecontact/affichecontact.component';
import { UpdatecontactComponent } from './admin/updatecontact/updatecontact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnecterComponent,
    RegesterComponent,
    AfficheregsterComponent,
    UpdateregesterComponent,
    ContactComponent,
    NavbarAdComponent,
    AjouterServiceComponent,
    HomeserviceComponent,
    AfficheajouteserviceComponent,
    UpdateajouerserviceComponent,
    AffichecontactComponent,
    UpdatecontactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
