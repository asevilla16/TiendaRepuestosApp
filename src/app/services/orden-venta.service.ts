import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class OrdenVentaService {

  APIUrl = "ventas";

  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getOrdenesVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.baseURL + this.APIUrl);
  }

  getOrdenVenta(id: number): Observable<Venta> {
    return this.http.get<Venta>(this.baseURL + this.APIUrl + "/" + id);
  }

  createOrdenVenta(venta: Venta) {
    return this.http.post<Venta>(this.baseURL + this.APIUrl, venta);
  }

  editOrdenVenta(venta: Venta) {
    return this.http.put<Venta>(this.baseURL + this.APIUrl + "/" + venta.id, venta);
  }
}
