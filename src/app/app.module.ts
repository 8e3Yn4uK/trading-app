import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { TradersComponent } from './traders/traders.component';
import {TradersService} from './traders/traders.service';
import {MarketService} from './market/market.service';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    TradersComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule
  ],
  providers: [TradersService,
              MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
