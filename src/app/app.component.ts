import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {CategoriesOfProductsComponent} from './components/categories-of-products/categories-of-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeaderComponent, CategoriesOfProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app_marketplace_kufer';
}
