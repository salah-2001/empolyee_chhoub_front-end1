import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ajouterservice } from '../model/ajouterservice';
import { AjouterserviceService } from '../service/ajouterservice.service';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent implements OnInit {

  ajoutserv:Ajouterservice=new Ajouterservice();

  constructor(private rejetserv:AjouterserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveserviec(){
    this.rejetserv.saveservice(this.ajoutserv).subscribe(data=>{
     console.log(data);
     this.gotoserviec();
    })
  }

  gotoserviec()
  {
    this.router.navigate(["/homeservice"]);
  }

  onsubmit()
  {
   this.saveserviec();
  }
}
