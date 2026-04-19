import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
import { StockItem } from './components/stock/stock-item/stock-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Card, StockItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('AngularProjekt');
}
