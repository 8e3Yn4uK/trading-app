import { Component, OnInit } from '@angular/core';
import {Stock} from '../model/Stock';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  stocks: Stock[];

  ngOnInit(): void {
    this.stocks = this.getMockStocks();
  }

  private getMockStocks(): Stock[] {
    let stocks: Stock[] = [];

    stocks.push(new Stock('BA', 'Boeing'));
    stocks.push(new Stock('CA', 'CAT'));
    stocks.push(new Stock('CO', 'Coca-Cola'));

    return stocks;
  }

}
