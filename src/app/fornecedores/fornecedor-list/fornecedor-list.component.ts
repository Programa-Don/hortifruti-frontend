import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { SupplierService } from '../../api/supplier.service';
import { Supplier } from '../../models/supplier.model';
import { FornecedorFormComponent } from '../fornecedor-form/fornecedor-form.component';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FornecedorFormComponent]
})
export class FornecedorListComponent implements OnInit {
  
  fornecedores: Supplier[] = []; 
  showModal = false; 

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe({
      next: (data: Supplier[]) => {
        this.fornecedores = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar fornecedores (MOCK FALHOU):', err);
      }
    });
  }
  
  abrirModalAdicionarFornecedor() {
    this.showModal = true;
  }
  
  fecharModalAdicionarFornecedor() {
    this.showModal = false;
    this.loadSuppliers(); 
  }
  deleteSupplier(cnpj: string): void {
  if (!confirm('Tem certeza que deseja excluir este fornecedor?')) {
    return;
  }

  // O serviço 'deleteSupplier' espera o ID (que é o CNPJ)
  this.supplierService.deleteSupplier(cnpj).subscribe({
    next: () => {
      console.log('Fornecedor deletado com sucesso');
      // Recarrega a lista para remover o item excluído
      this.loadSuppliers(); 
    },
    error: (err) => {
      console.error('Erro ao deletar fornecedor:', err);
    }
  });
}
}