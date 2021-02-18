import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleCompra } from '../models/detalle-compra';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenCompraService {

  apiURL = 'detallescompra/'
  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getDetailById(id){
    return this.http.get<DetalleCompra>(this.baseURL + this.apiURL + id);
  }

}
