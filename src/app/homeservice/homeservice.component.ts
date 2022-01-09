import { Component, OnInit } from '@angular/core';
import { Ajouterservice } from '../model/ajouterservice';
import { AjouterserviceService } from '../service/ajouterservice.service';

@Component({
  selector: 'app-homeservice',
  templateUrl: './homeservice.component.html',
  styleUrls: ['./homeservice.component.scss']
})
export class HomeserviceComponent implements OnInit {
   
  ajouteservice: Ajouterservice[] = []; 

  constructor(private ajouteserv:AjouterserviceService) { }

  ngOnInit(): void {
    this.getservice();
  }

  private getservice()
  {
     this.ajouteserv.getservicee().subscribe(data=>{
      this.ajouteservice=data;
    })
  }


}
