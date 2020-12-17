import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  APIUrl = "clientes";

  baseURL = environment.baseURL;


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseURL + this.APIUrl);
  }

  getCliente(id: Number){
    return this.http.get<Cliente>(this.baseURL + this.APIUrl + '/' + id);
  }

  deleteCliente(id: Number){
    return this.http.delete(this.baseURL + this.APIUrl + '/' + id);
  }

  saveCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.baseURL + this.APIUrl, cliente);
  }

  putCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.baseURL + this.APIUrl + '/' + cliente.id, cliente);
  }
}
