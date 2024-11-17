import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{
  listaPersonagens: any=null;
constructor(private api: ApiServiceService){}
ngOnInit(){
  this.api.getPersonagens().subscribe((data: any)=>{
    console.log(data)
    this.listaPersonagens = data;
  })
  
}

}