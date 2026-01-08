import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Books } from './components/books/books';
@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Books],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('AngularProjekt');
}
