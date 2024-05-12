import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ShoppingCartBuyComponent} from "./shopping-cart-buy/shopping-cart-buy.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [CommonModule, RouterLink, ShoppingCartBuyComponent]
})
export class ShoppingCartComponent {

}
