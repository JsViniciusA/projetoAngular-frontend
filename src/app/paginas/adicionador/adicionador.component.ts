import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionador',
  templateUrl: './adicionador.component.html',
  styleUrls: ['./adicionador.component.css']
})
export class AdicionadorComponent implements OnInit {
  produtoForm!: FormGroup;


  constructor(
    private apiService: ApiServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.produtoForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  adicionarProduto() {
    if (this.produtoForm.valid) {
      this.apiService.addProduto(this.produtoForm.value).subscribe(
        (response: any) => {
          console.log('Produto adicionado com sucesso!', response);
          this.produtoForm.reset();
        },
        (error: any) => {
          console.error('Erro ao adicionar produto:', error);
        }
      );
    }
  }
}
