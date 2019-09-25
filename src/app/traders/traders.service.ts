import { Injectable } from '@angular/core';
import {Trader} from '../model/Trader';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradersService {

  traders: Trader[];

  constructor() {
    this.traders = this.getMockTraders();
  }

  private getMockTraders(): Trader[] {
    let traders: Trader[] = [];

    traders.push(new Trader('Jack'));
    traders.push(new Trader('John'));

    return traders;
  }

  add(name: string) {
    this.traders.push(new Trader(name));
  }

  getTraders(): Observable<Trader[]> {
    return of(this.traders);
  }
}
