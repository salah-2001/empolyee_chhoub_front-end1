import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ajouterservice } from 'src/app/model/ajouterservice';
import { AjouterserviceService } from 'src/app/service/ajouterservice.service';

@Component({
  selector: 'app-updateajouerservice',
  templateUrl: './updateajouerservice.component.html',
  styleUrls: ['./updateajouerservice.component.scss']
})
export class UpdateajouerserviceComponent implements OnInit {
  
  ajoutserv:Ajouterservice=new Ajouterservice();
  id!:number;

  constructor(private servajout:AjouterserviceService,private router:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];
    this.servajout.getservicebyid(this.id).subscribe(data=>{
      this.ajoutserv=data;
    })
  }

  onsubmit()
  {
    this.servajout.updateservice(this.id,this.ajoutserv).subscribe(data=>{
      this.gotoafficher();
    })
      
  }

  gotoafficher()
  {
    this.router.navigate(["/ajouteservice"]);
  }
}
