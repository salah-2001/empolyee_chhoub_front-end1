import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regester } from '../model/regester';

@Injectable({
  providedIn: 'root'
})
export class ServiceregesterService {

  private regesterurl ="http://localhost:8080/regester";

  constructor(private httpclient:HttpClient) { }

  getregester():Observable<Regester[]>{
    return this.httpclient.get<Regester[]>(`${this.regesterurl}`);
  }

  postregester( regester : Regester):Observable<Object>{
    return this.httpclient.post(`${this.regesterurl}`,regester);
  }

  getregesterbyid(id:number):Observable<Regester>{
    return this.httpclient.get<Regester>(`${this.regesterurl}/${id}`);
  }

  updateregester(id:number,regester:Regester):Observable<object>{
    return this.httpclient.put(`${this.regesterurl}/${id}`,regester);
  }

  deleteregester(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.regesterurl}/${id}`);
  }
}
