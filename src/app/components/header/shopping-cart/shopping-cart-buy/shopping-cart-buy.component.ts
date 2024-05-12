import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactDetailsComponent} from "./contact-details/contact-details.component";

@Component({
  selector: 'app-shopping-cart-buy',
  standalone: true,
  templateUrl: './shopping-cart-buy.component.html',
  styleUrl: './shopping-cart-buy.component.scss',
  imports: [CommonModule, ContactDetailsComponent]
})
export class ShoppingCartBuyComponent {
  // isVisibleShoppingCartBuy: boolean = false;
}
