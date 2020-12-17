import { Repuesto } from './../models/repuesto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  APIUrl = "repuestos";

  baseURL = environment.baseURL;
  
  constructor(private http: HttpClient) { }

  getRepuestos(): Observable<Repuesto[]>{
    return this.http.get<Repuesto[]>(this.baseURL + this.APIUrl);
  }

  getRepuesto(id: Number){
    return this.http.get<Repuesto>(this.baseURL + this.APIUrl + '/' + id);
  }

  saveRepuesto(repuesto: Repuesto){
    return this.http.post<Repuesto>(this.baseURL + this.APIUrl, repuesto);
  }

  putRepuesto(repuesto: Repuesto){
    return this.http.put<Repuesto>(this.baseURL + this.APIUrl + '/' + repuesto.id, repuesto);
  }

  deleteRepuesto(id: Number){
    return this.http.delete(this.baseURL + this.APIUrl + '/' + id);
  }
}
