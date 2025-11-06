import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../models/supplier.model'; 
import { SupplierService } from '../../api/supplier.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FornecedorFormComponent {
  @Output() closeModal = new EventEmitter<void>();
  supplier: Supplier = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    status: 'Ativo',
    pendingDeliveries: 0
  };

  constructor(private supplierService: SupplierService) { }
  
  saveSupplier() { 
    console.log('Salvando fornecedor (API):', this.supplier);
    this.supplierService.saveSupplier(this.supplier).subscribe({
      next: (fornecedorSalvo) => {
        console.log('Fornecedor salvo com sucesso:', fornecedorSalvo);
        
        this.closeModal.emit(); 
      },
      error: (err) => {
        console.error('Erro ao salvar fornecedor:', err);
      }
    });
  }
}