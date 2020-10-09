import { Repuesto } from './../models/repuesto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  APIUrl = "https://localhost:44350/api/repuestos";

  constructor(private http: HttpClient) { }

  getRepuestos(): Observable<Repuesto[]>{
    return this.http.get<Repuesto[]>(this.APIUrl);
  }

  getRepuesto(id: Number){
    return this.http.get<Repuesto>(this.APIUrl + '/' + id);
  }

  saveRepuesto(repuesto: Repuesto){
    return this.http.post<Repuesto>(this.APIUrl, repuesto);
  }

}
