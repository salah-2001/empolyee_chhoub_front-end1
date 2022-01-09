import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactserviceService } from '../service/contactservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact:Contact=new Contact();
  constructor(private contactservice:ContactserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  savecontact()
  {
    this.contactservice.savecontact(this.contact).subscribe(data=>{
      console.log(data);
      this.onhome();
    })
  }

  onsubmit(){
    this.savecontact();
  }

  onhome()
  {
    this.router.navigate(["/"]);
  }
}
