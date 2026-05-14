import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../model/stock';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  imports: [NgClass, NgIf, NgForOf],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem implements OnInit {
  public stock!: Array<Stock>;
  constructor() {}
  ngOnInit() {
    // this.stock = [
    //   new Stock('Test stock company', 'TSC', 85, 80, 'https://placehold.co/300x400'),
    //   new Stock('Test stock company', 'TSC', 85, 80, 'https://placehold.co/300x400'),
    //   new Stock('Test stock company', 'TSC', 85, 80, 'https://placehold.co/300x400'),
    // ];
    // let dif = this.stock.price / this.stock.previousProce - 1;
    // let largChange = Math.abs(dif) > 0.01;
    // this.stockStyles = {
    //   color: this.stock.isPositiveChange() ? 'greem' : 'red',
    //   'font-size': largChange ? '1.2em' : '0.8em',
    // };
  }

  // trackStockByCode(stock, index) {
  //   return stock.code;
  // }

  // toggleFavorite(event: any) {
  //   console.log('we are toggeling the favorite state for this event', event);
  //   this.stock.favorite = !this.stock.favorite;
  // }
  // toggleSeale(event: any) {
  //   console.log('this product is on sale', event);
  //   this.stock.sale = !this.stock.sale;
  // }
}
