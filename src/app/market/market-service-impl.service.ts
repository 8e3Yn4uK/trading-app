import { Injectable } from '@angular/core';
import {Stock} from '../model/Stock';

@Injectable({
  providedIn: 'root'
})
export class MarketServiceImpl implements MarketService{

  stocks: Stock[];

  counter: number;

  constructor(){
    this.stocks = this.getMockStocks();
  }

  private getMockStocks(): Stock[] {
    let stocks: Stock[] = [];

    stocks.push(new Stock('BA', 'Boeing', this));
    stocks.push(new Stock('CA', 'CAT', this));
    stocks.push(new Stock('CO', 'Coca-Cola', this));

    return stocks;
  }

  getStocks(): Stock[] {
    return this.stocks;
  }

  addStock(symbol: string, company: string){
    this.stocks.push(new Stock(symbol, company, this));
  }

  getPrice(symbol: string): number {
    return this.getRoundedPrice(symbol);
  }

  getUpdatedPrice(currentPrice: number): number {
    let multiplier = 1;
    this.counter ++;

    if (this.counter % 2 == 0){
      multiplier = -1;
    }

    return Math.round((currentPrice + (Math.random() * multiplier))
            * 100 + Number.EPSILON) / 100;
  }

  getRoundedPrice(symbol: string): number {
    return Math.round((Math.random() * 1000 * symbol.length)
            * 100 + Number.EPSILON) / 100;
  }
}

export interface MarketService {
  getPrice(symbol: string): number;
  getUpdatedPrice(currentPrice: number): number;
  getStocks(): Stock[];
  addStock(symbol: string, company: string);
}
