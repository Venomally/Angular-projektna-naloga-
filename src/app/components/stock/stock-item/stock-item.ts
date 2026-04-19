import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../model/stock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem implements OnInit {
  public stock!: Stock;
  public stockClass: any;
  constructor() {}
  ngOnInit() {
    this.stock = new Stock('Test stock company', 'TSC', 85, 80, 'https://placehold.co/300x400');
    let dif = this.stock.price / this.stock.previousProce - 1;
    let largChange = Math.abs(dif) > 0.01;
    this.stockClass = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largChange,
      'small-change': !largChange,
    };
  }

  toggleFavorite(event: any) {
    console.log('we are toggeling the favorite state for this event', event);
    this.stock.favorite = !this.stock.favorite;
  }
  toggleSeale(event: any) {
    console.log('this product is on sale', event);
    this.stock.sale = !this.stock.sale;
  }
}
