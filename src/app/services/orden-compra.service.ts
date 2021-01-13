import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  APIUrl = "compras";

  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getOrdenesCompra(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.baseURL + this.APIUrl);
  }

  getOrdenCompra(id: number): Observable<Compra> {
    return this.http.get<Compra>(this.baseURL + this.APIUrl + "/" + id);
  }

  createOrdenCompra(compra: Compra) {
    return this.http.post<Compra>(this.baseURL + this.APIUrl, compra);
  }

  editOrdenCompra(compra: Compra) {
    return this.http.put<Compra>(this.baseURL + this.APIUrl + "/" + compra.id, compra);
  }

}
