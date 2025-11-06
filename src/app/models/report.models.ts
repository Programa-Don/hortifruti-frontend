export interface FinancialReport {
  productName: string;
  amount: number;
  price: number; 
  total: number;
}

export interface StockReport {
  productName: string;
  amount: number;
  entryDate: string;
  validity: string;
  daysRemaining: number;
}


export interface ValidityReport {
  productName: string;
  amount: number;
  validity: string; 
  status: string;
}

export interface HistoricalReport {
  productName: string;
  status: string;
  amount: number;
  dateTime: string;
  observacao: string; 
}