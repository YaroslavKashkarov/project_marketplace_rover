import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {CreateAnItemComponent} from './create-an-item/create-an-item.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterLink} from "@angular/router";

@Component({
	selector: 'app-header',
	standalone: true,
  imports: [CommonModule, FilterComponent, CreateAnItemComponent, ShoppingCartComponent, RouterLink],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	isFilterVisible: boolean = false;
	isCreateItemVisible: boolean = false;

	isCreateItem(): void {
		this.isCreateItemVisible = !this.isCreateItemVisible;
	}

	toggleFilter(event: Event): void {
		console.log(event);
		event.preventDefault();
		this.isFilterVisible = !this.isFilterVisible;
	}
}
