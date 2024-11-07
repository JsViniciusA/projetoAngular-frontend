import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { AdicionadorComponent } from '../adicionador/adicionador.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{
  listaProdutos: any=null;
constructor(private api: ApiServiceService){}
ngOnInit(){
  this.api.getProdutos().subscribe((data: any)=>{
    console.log(data)
    this.listaProdutos = data;
  })
  
}

}