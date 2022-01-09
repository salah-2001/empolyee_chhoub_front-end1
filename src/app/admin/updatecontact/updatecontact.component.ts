import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactserviceService } from 'src/app/service/contactservice.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.scss']
})
export class UpdatecontactComponent implements OnInit {

  contact:Contact=new Contact();

  id!:number;
  
  constructor(private contactservice:ContactserviceService,private router:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];
    this.contactservice.getcontactbyid(this.id).subscribe(data=>{
      this.contact=data;
    })
  }

  onsubmit(){
    this.contactservice.updatecontact(this.id,this.contact).subscribe(data=>{
       this.gotoafficher();
    })
  }

  gotoafficher()
  {
    this.router.navigate(["/affichecontact"]);
  }

}
