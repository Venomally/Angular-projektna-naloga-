import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [NgForOf],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  public stock!: Array<Stock>;
  constructor() {}
  ngOnInit(): void {
    this.stock = [
      new Stock('Nekakva knjiga', '444802782373', 40, 'https://placehold.co/300x400'),
      new Stock('Nekakva knjiga', '444802782373', 40, 'https://placehold.co/300x400'),
      new Stock('Nekakva knjiga', '444802782373', 40, 'https://placehold.co/300x400'),
    ];
  }
}
