import {Component, OnInit} from '@angular/core';
import {Stock} from './model/Stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trading-app';

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
