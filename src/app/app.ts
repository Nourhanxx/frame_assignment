import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Semifooter } from "./components/semifooter/semifooter";
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, Footer, Navbar, Semifooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first_asssignment';
}
