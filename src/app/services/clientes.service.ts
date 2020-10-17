import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  APIUrl = "https://localhost:44350/api/clientes";


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.APIUrl);
  }

  getCliente(id: Number){
    return this.http.get<Cliente>(this.APIUrl + '/' + id);
  }

  deleteCliente(id: Number){
    return this.http.delete(this.APIUrl + '/' + id);
  }

  saveCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.APIUrl, cliente);
  }

  putCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.APIUrl + '/' + cliente.id, cliente);
  }
}
