import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheregsterComponent } from './admin/afficheregster/afficheregster.component';
import { HomeserviceComponent } from './homeservice/homeservice.component';
import { UpdateregesterComponent } from './admin/updateregester/updateregester.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';

import { ConnecterComponent } from './connecter/connecter.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { RegesterComponent } from './regester/regester.component';
import { AfficheajouteserviceComponent } from './admin/afficheajouteservice/afficheajouteservice.component';
import { NavbarAdComponent } from './admin/navbar-ad/navbar-ad.component';
import { UpdateajouerserviceComponent } from './admin/updateajouerservice/updateajouerservice.component';
import { AffichecontactComponent } from './admin/affichecontact/affichecontact.component';
import { UpdatecontactComponent } from './admin/updatecontact/updatecontact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regester', component: RegesterComponent },
  { path: 'connecter', component: ConnecterComponent },
  { path: 'afficheregester', component: AfficheregsterComponent },
  { path: 'updateregester/:id', component: UpdateregesterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ajouterservice', component: AjouterServiceComponent },
  { path: 'homeservice', component: HomeserviceComponent },
  { path: 'ajouteservice', component: AfficheajouteserviceComponent },
  { path: 'nvbaradmin', component: NavbarAdComponent },
  { path: 'updateservice/:id', component: UpdateajouerserviceComponent },
  { path: 'affichecontact', component: AffichecontactComponent },
  { path: 'updatecontact/:id', component: UpdatecontactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
