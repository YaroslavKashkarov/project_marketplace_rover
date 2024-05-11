import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-shopping-cart-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart-buy.component.html',
  styleUrl: './shopping-cart-buy.component.scss'
})
export class ShoppingCartBuyComponent {
  isVisibleShoppingCartBuy: boolean = false;
}
