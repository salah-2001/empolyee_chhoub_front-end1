import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regester } from 'src/app/model/regester';
import { ServiceregesterService } from 'src/app/service/serviceregester.service';

@Component({
  selector: 'app-updateregester',
  templateUrl: './updateregester.component.html',
  styleUrls: ['./updateregester.component.scss']
})
export class UpdateregesterComponent implements OnInit {

  regester:Regester = new Regester();
  id!: number;
  
  constructor(private regesterservice:ServiceregesterService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.regesterservice.getregesterbyid(this.id).subscribe(data=>{
      this.regester=data;
    })
  }

  onsubmit(){
    this.regesterservice.updateregester(this.id,this.regester).subscribe(data=>{
      this.gotoaffiche();
    })
  }

  gotoaffiche()
  {
    this.route.navigate(["/afficheregester"]);
  }
}
