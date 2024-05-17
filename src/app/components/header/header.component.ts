import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CreateAnItemComponent } from './create-an-item/create-an-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { ForgotPasswordComponent } from './auth-dialog/forgot-password/forgot-password.component';
import { CongratulationsComponent } from './auth-dialog/congratulations/congratulations.component';
import { AuthenticationService } from '../services/authentication.service';
import { DialogComponentsOptions } from '../../../core/interfaces/dialog-components-options';
import { DialogService } from '../services/dialog.service';

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

  constructor(public dialog: MatDialog, private router: Router, private dialogService: DialogService) {
  }


  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  openFilter(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.isFilterVisible = !this.isFilterVisible;
  }

  openAuthDialog(): void {
    this.dialogService.openAuthDialog();
  }

  authOrProfile() {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      this.router.navigateByUrl('profile');
    } else {
      this.openAuthDialog();
    }
  }

  btn() {
    console.log(localStorage.getItem('userToken'));
  }
}
