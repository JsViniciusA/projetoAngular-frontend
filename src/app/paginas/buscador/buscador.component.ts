import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {
  listaProdutos: any=null;

  constructor(private api: ApiServiceService){}
  ngOnInit(){
  this.api.getProdutos().subscribe((data: any)=>{
    this.listaProdutos = data;
    console.log(data)
    console.log(data.name)
    console.log(data.id)
    console.log(data.sprites.other['official-artwork'].front_default)
  })
  
}

}