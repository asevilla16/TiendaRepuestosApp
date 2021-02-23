import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Existencia, Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  APIUrl = "inventario";

  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getInventarios(): Observable<Existencia[]> {
    return this.http.get<Existencia[]>(this.baseURL + this.APIUrl);
  }

  getInventario(id): Observable<Inventario>{
    return this.http.get<Inventario>(this.baseURL + this.APIUrl + "/" + id);
  }

  saveInventario(inventario: Inventario){
    return this.http.post<Inventario>(this.baseURL + this.APIUrl, inventario);
  }

  deleteInventario(id: number){
    return this.http.delete(this.baseURL + this.APIUrl + '/' + id);
  }

  putInventario(inventario: Inventario){
    return this.http.put<Inventario>(this.baseURL + this.APIUrl + '/' + inventario.id, inventario);
  }
}
