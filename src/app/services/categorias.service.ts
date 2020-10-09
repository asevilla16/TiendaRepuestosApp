import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  APIUrl = "https://localhost:44350/api/categorias";

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.APIUrl);
  }

}
