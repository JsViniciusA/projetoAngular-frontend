import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaServiceService {
  private apiUrl = 'https://api.disneyapi.dev/character/{id}'; // URL base da API
  personagem: any

  constructor(private http: HttpClient) {}
 
  // Buscar personagem por ID
  getPersonagemPorId(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}