import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {
  listaProdutos: any = null;
  produtos: any = null

  constructor(private api: ApiServiceService) { }
    ngOnInit(){
    

  }
  buscar(obj:string){
    this.api.getProdutos().subscribe((data:any)=>{
      console.log(data)
    })
  }
  // ngOnInit(obj: any) {
  //   this.api.addProduto(obj.target.value)
  //     .subscribe({
  //       next: (data: any) => {
  //         this.produtos = data
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
}