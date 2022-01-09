import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private httclient:HttpClient) { }

  private urlcontact="http://localhost:8080/contact";

  getcontact():Observable<Contact[]>{
    return this.httclient.get<Contact[]>(`${this.urlcontact}`);
  }

  savecontact(contact:Contact):Observable<Object>{
    return this.httclient.post(`${this.urlcontact}`,contact);
  }

  getcontactbyid(id:number):Observable<Contact>{
    return this.httclient.get<Contact>(`${this.urlcontact}/${id}`);
  }

  updatecontact(id:number,contact:Contact):Observable<object>{
    return this.httclient.put(`${this.urlcontact}/${id}`,contact);
  }

  deletcontact(id:number):Observable<object>{
    return this.httclient.delete(`${this.urlcontact}/${id}`);
  }

}
