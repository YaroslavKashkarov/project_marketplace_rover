import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {CreateAnItemComponent} from './create-an-item/create-an-item.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterLink} from "@angular/router";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent, CreateAnItemComponent, ShoppingCartComponent, RouterLink, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isFilterVisible: boolean = false;
  isCreateItemVisible: boolean = false;
  isShoppingCartVisible: boolean = false;

  constructor(public dialog: MatDialog){}

  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  toggleFilter(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.isFilterVisible = !this.isFilterVisible;
  }

  toogleTrash(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  openAuthDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      height: '650px',
      width: '530px'
    });
  }
}
