import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../api/categoria.service';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, CategoriaFormComponent], 
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit { 

  categorias: Categoria[] = [];

    showModal = false;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  abrirModalAdicionarCategoria(): void {
    this.showModal = true;
  }

  fecharModalAdicionarCategoria(): void {
    this.showModal = false;
    this.loadCategorias(); 
  }

  deleteCategoria(id: string): void {
    if (!confirm('Tem certeza que deseja excluir esta categoria?')) {
      return;
    }

   
    this.categoriaService.deleteCategoria(id).subscribe({
      next: () => {
        console.log('Categoria deletada com sucesso');
        this.loadCategorias(); 
      },
      error: (err) => {
        console.error('Erro ao deletar categoria:', err);
      }
    });
  }
}