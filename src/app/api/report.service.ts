import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { 
  ValidityReport, 
  StockReport, 
  FinancialReport, 
  HistoricalReport 
} from '../models/report.models'; 

import { API_URL } from './api.constants'; 

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = `${API_URL}/reports`; 

  constructor(private http: HttpClient) { }

  getFinancialReport(): Observable<FinancialReport[]> {
    return this.http.get<FinancialReport[]>(`${this.apiUrl}/financial`);
  }

  getStockReport(): Observable<StockReport[]> {
    return this.http.get<StockReport[]>(`${this.apiUrl}/stock`);
  }

  getValidityReport(): Observable<ValidityReport[]> {
    return this.http.get<ValidityReport[]>(`${this.apiUrl}/validity`);
  }

  getSalesHistoryReport(): Observable<HistoricalReport[]> {
    return this.http.get<HistoricalReport[]>(`${this.apiUrl}/history`);
  }
}