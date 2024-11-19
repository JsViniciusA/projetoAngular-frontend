import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  nomePersonagem: string = ''; // Nome digitado pelo usuário
  personagem: any = null; // Dados do personagem retornados pela API
  erro: string = ''; // Mensagem de erro, se houver

  constructor(private http: HttpClient) {}

  buscarPersonagem() {
    if (!this.nomePersonagem.trim()) {
      this.erro = 'Por favor, insira um nome de personagem.';
      this.personagem = null;
      return;
    }

    const apiUrl = `https://api.disneyapi.dev/character?name=${this.nomePersonagem}`;
    
    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        if (response.data && response.data.length > 0) {
          this.personagem = response.data[0]; // Seleciona o primeiro resultado
          this.erro = '';
        } else {
          this.erro = 'Nenhum personagem encontrado.';
          this.personagem = null;
        }
      },
      error: (error) => {
        this.erro = 'Erro ao buscar personagem. Tente novamente mais tarde.';
        console.error(error);
      }
    });
  }
}
