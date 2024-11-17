import { Component, OnInit } from '@angular/core';
import { BuscaServiceService } from '../../services/busca-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
personagem: any = '';
constructor(private http: HttpClient) {}

buscar(id: string) {
  console.log('ID recebido:', id);

  if (!id || isNaN(Number(id))) {
    console.error('Por favor, insira um ID válido.');
    return;
  }

  const url = `https://api.disneyapi.dev/character/${id}`;
  console.log('URL sendo chamada:', url);

  this.http.get(url).subscribe({
    next: (data: any) => {

      console.log('Dados do personagem:', data)
      const dado: any = data.data.name;
      console.log(dado)
      this.personagem = data;
    },
    error: (error) => console.error('Erro ao buscar personagem:', error)
  });
}
}
  
  // ngOnInit(obj: any) {
  //   this.api.addProduto(obj.target.value)
  //     .subscribe({
  //       next: (data: any) => {
  //         this.personagens = data
  //         console.log(data)
  //         // console.log(data.name)
  //         // console.log(data.id)
  //         // console.log(data.sprites.other['official-artwork'].front_default)
  //       },
  //       error: (error: any) => {
  //         console.log(error)
  //       }
  //     })
  // }