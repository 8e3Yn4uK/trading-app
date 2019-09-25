import { Component, OnInit } from '@angular/core';
import {Stock} from '../model/Stock';
import {MarketServiceImpl} from './market-service-impl.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  stocks: Stock[];

  constructor(private marketService: MarketServiceImpl){
    this.stocks = [];
  }

  ngOnInit(): void {
    this.updateStocks();
  }

  private updateStocks() {
    this.stocks = this.marketService.getStocks();
  }

  add(symbol: string, company: string){
    this.marketService.addStock(symbol, company);
    this.updateStocks();
  }

}
