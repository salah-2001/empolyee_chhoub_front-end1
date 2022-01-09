import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ajouterservice } from 'src/app/model/ajouterservice';
import { AjouterserviceService } from 'src/app/service/ajouterservice.service';

@Component({
  selector: 'app-afficheajouteservice',
  templateUrl: './afficheajouteservice.component.html',
  styleUrls: ['./afficheajouteservice.component.scss']
})
export class AfficheajouteserviceComponent implements OnInit {

  ajouteserv: Ajouterservice[] = [];

  constructor(private servajout:AjouterserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getservice();
  }

  private getservice(){
    this.servajout.getservicee().subscribe(data=>{
      this.ajouteserv=data;
    })
  }

  onupdet(id:number)
  {
    this.router.navigate(["updateservice",id]);
  }
  
  ondelet(id:number)
  {
    this.servajout.deletservice(id).subscribe(dara=>{
      this.getservice();
    })
  }
}
