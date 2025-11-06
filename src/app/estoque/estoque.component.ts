import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stock } from '../models/stock.model';
import { StockService } from '../api/stock.service';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  stockList: Stock[] = [];
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock(): void {
    this.stockService.getStock().subscribe(
      (data) => {
        this.stockList = data;
      },
      (err) => {
        console.error('Erro ao carregar dados de estoque:', err);
      }
    );
  }
}