import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  APIUrl = "proveedores";

  baseURL = environment.baseURL;
  constructor(
    private http: HttpClient
  ) { }

  getProveedores(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.baseURL + this.APIUrl);
  }
}
