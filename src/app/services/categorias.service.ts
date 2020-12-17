import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  baseURL = environment.baseURL;

  APIUrl = "categorias";

  

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseURL + this.APIUrl);
  }

  saveCategories(categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.baseURL + this.APIUrl, categoria)
  }

}
