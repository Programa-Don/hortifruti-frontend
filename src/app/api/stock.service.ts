import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock.model';
import { API_URL } from './api.constants';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = `${API_URL}/stock`; 
  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

}