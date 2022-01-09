import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ajouterservice } from '../model/ajouterservice';

@Injectable({
  providedIn: 'root'
})
export class AjouterserviceService {

  private urlserviec="http://localhost:8080/ajouteservice";

  constructor(private httclient:HttpClient) { }

  getservicee():Observable<Ajouterservice[]>{
    return this.httclient.get<Ajouterservice[]>(`${this.urlserviec}`);
  }

  saveservice(ajoutservis:Ajouterservice):Observable<Object>{
    return this.httclient.post(`${this.urlserviec}`,ajoutservis);
  }

  getservicebyid(id:number):Observable<Ajouterservice>{
    return this.httclient.get<Ajouterservice>(`${this.urlserviec}/${id}`);
  }

  updateservice(id:number,ajouterservice:Ajouterservice):Observable<object>{
    return this.httclient.put(`${this.urlserviec}/${id}`,ajouterservice);
  }

  deletservice(id:number):Observable<object>{
    return this.httclient.delete(`${this.urlserviec}/${id}`);
  }
}
