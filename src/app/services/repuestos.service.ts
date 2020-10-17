import { Repuesto } from './../models/repuesto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  APIUrl = "https://localhost:44350/api/repuestos";

  private updateForm = new BehaviorSubject<Repuesto>({} as any);

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

  putRepuesto(repuesto: Repuesto){
    return this.http.put<Repuesto>(this.APIUrl + '/' + repuesto.id, repuesto);
  }

  deleteRepuesto(id: Number){
    return this.http.delete(this.APIUrl + '/' + id);
  }
}
