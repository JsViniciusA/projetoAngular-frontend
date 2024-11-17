import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
// injetar biblioteca http
  constructor(private http: HttpClient) {}
  // criar o método de capitura get do endpoint da API
  //buscar uma listagem de Personagens
  getPersonagens(){
    return this.http.get('https://api.disneyapi.dev/character');
  }
}
