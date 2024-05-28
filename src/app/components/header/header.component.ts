import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { IUser } from '../../../core/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { UserIconComponent } from './user-icon/user-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent, CreateAnItemComponent, ShoppingCartComponent, RouterLink, MatDialogModule, UserIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy{
  
  currentUser: IUser | null;
  userSubscription: Subscription;
  
//   isFilterVisible: boolean = false;
  isCreateItemVisible: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private dialogService: DialogService, private authService: AuthenticationService) {
    this.userSubscription = this.authService.$currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  openFilter(event: Event): void {
	this.dialogService.openFilterDialog()
  }

  openAuthDialog(): void {
    this.dialogService.openAuthDialog();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
