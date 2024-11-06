import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
// injetar biblioteca http
  constructor(private http: HttpClient) {}
  // criar o método de capitura get do endpoint da API
  //buscar uma listagem de personagens
  getHerois(){
    return this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  }
}
