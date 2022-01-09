import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regester } from '../../model/regester';
import { ServiceregesterService } from '../../service/serviceregester.service';

@Component({
  selector: 'app-afficheregster',
  templateUrl: './afficheregster.component.html',
  styleUrls: ['./afficheregster.component.scss']
})
export class AfficheregsterComponent implements OnInit {

  regester: Regester[] = [];

  constructor(private serviceregester:ServiceregesterService,private router:Router) { }

  ngOnInit(): void {
    this.getregester();
  }

  private getregester()
  {
     this.serviceregester.getregester().subscribe(data=>{
       this.regester=data;
     })
  }

  onupdate(id:number)
  {
    this.router.navigate(["updateregester",id])
  }

  ondelete(id:number)
  {
    this.serviceregester.deleteregester(id).subscribe(data=>{
      this.getregester();
    })
  }
}
