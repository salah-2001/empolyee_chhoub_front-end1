import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactserviceService } from 'src/app/service/contactservice.service';

@Component({
  selector: 'app-affichecontact',
  templateUrl: './affichecontact.component.html',
  styleUrls: ['./affichecontact.component.scss']
})
export class AffichecontactComponent implements OnInit {

  contact: Contact[] = []; 

  constructor(private contactservice:ContactserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getcontact();
  }


  getcontact()
  {
    this.contactservice.getcontact().subscribe(data=>{
      this.contact=data;
    })

  }

  onedit(id:number)
  {
    this.router.navigate(["updatecontact",id])

  }
  onedelet(id:number)
  {
    this.contactservice.deletcontact(id).subscribe(data=>{
      this.getcontact();
    })
  }
}
