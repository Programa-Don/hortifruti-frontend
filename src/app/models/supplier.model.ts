export interface Supplier {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  email: string;
  telefone: string;
  status: 'Ativo' | 'Bloqueado'; 
  pendingDeliveries: number;
}