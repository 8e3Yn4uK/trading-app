import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MarketComponent} from './market/market.component';
import {TradersComponent} from './traders/traders.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: '/market', pathMatch: 'full'},
  {path: 'traders', component: TradersComponent},
  {path: 'market', component: MarketComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
