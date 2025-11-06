import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../api/categoria.service';

interface CategoriaDTO {
  name: string;
}

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {


  @Output() closeModal = new EventEmitter<void>();


  public categoriaDTO: CategoriaDTO = {
    name: ''
  };

  constructor(private categoriaService: CategoriaService) {}

  saveCategoria() {
    console.log('Salvando categoria (API):', this.categoriaDTO);

    this.categoriaService.saveCategoria(this.categoriaDTO as any).subscribe({
      next: (categoriaSalva) => {
        console.log('Categoria salva com sucesso:', categoriaSalva);
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Erro ao salvar categoria:', err);
      }
    });
  }
}