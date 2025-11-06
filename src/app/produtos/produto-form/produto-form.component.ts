import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../api/categoria.service';

import { ProductService } from '../../api/product.service';

interface ProductFormDTO {
  name: string;
  price: number;
  description: string;
  categoryId: string; 
}

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProdutoFormComponent implements OnInit { 

  @Output() closeModal = new EventEmitter<void>();

  public productDTO: ProductFormDTO = {
    name: '',
    price: 0.0,
    description: '',
    categoryId: '' 
  };

  public categorias: Categoria[] = [];

  constructor(
    private productService: ProductService,
    private categoriaService: CategoriaService 
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  saveProduct() {
    console.log('Salvando produto (API):', this.productDTO);

    this.productService.saveProduct(this.productDTO).subscribe({
      next: (produtoSalvo) => {
        console.log('Produto salvo com sucesso:', produtoSalvo);
        this.closeModal.emit(); 
      },
      error: (err) => {
        console.error('Erro ao salvar produto:', err);
      }
    });
  }
}