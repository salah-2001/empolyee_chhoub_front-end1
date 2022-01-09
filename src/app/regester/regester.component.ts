import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Regester } from '../model/regester';
import { ServiceregesterService } from '../service/serviceregester.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {

  regester: Regester = new Regester();


  constructor(private regesterservice:ServiceregesterService, private router:Router) { }

  ngOnInit() {
  }


  

  saveregester()
  {
    this.regesterservice.postregester(this.regester).subscribe(data=>{
      console.log(data);
      this.gotoconnecter();
    })
  }

  gotoconnecter()
  {
    this.router.navigate(["/connecter"]);
  }

  onsubmit(){
    this.saveregester();
  }

}
