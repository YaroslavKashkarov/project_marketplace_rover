import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {CreateAnItemComponent} from './create-an-item/create-an-item.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterLink} from "@angular/router";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AuthDialogComponent} from './auth-dialog/auth-dialog.component';
import {ForgotPasswordComponent} from './auth-dialog/forgot-password/forgot-password.component';
import {CongratulationsComponent} from './auth-dialog/congratulations/congratulations.component';

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

  constructor (public dialog: MatDialog) {}

  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  openFilter(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.isFilterVisible = !this.isFilterVisible;
  }

  openShoppingCart(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  openAuthDialog(): void {
    const authDialogRef = this.dialog.open(AuthDialogComponent, {
      height: '650px',
      width: '530px'
    });

    authDialogRef.afterClosed().subscribe(res => {
      switch (res?.openComponent) {
        case 'ForgotPassword':
          this.openForgotPasswordDialog();
          break;
        case 'Congratulations':
          this.openCongratulationsDialog();
          break;
        default:
          break;
      }
    });
  }

  openForgotPasswordDialog(): void {
    const forgotDialogRef = this.dialog.open(ForgotPasswordComponent, {
      height: '650px',
      width: '530px'
    });
  }

  openCongratulationsDialog(): void {
    const congratDialogRef = this.dialog.open(CongratulationsComponent, {
      height: '650px',
      width: '530px'
    });
  }
}
