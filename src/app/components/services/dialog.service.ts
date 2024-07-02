import { Observable, filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../header/auth-dialog/auth-dialog.component';
import { ForgotPasswordComponent } from '../header/auth-dialog/forgot-password/forgot-password.component';
import { CongratulationsComponent } from '../header/auth-dialog/congratulations/congratulations.component';
import { DialogComponentsOptions } from '../../../core/interfaces/dialog-components-options';
import { FilterComponent } from '../header/filter/filter.component';
import { Router } from '@angular/router';
import { IFilters } from '../../../core/interfaces/filters.interface';
import { FilterDialogComponent } from '../header/filter/filter-dialog/filter-dialog.component';
import { CheckoutFormComponent } from '../header/shopping-cart/checkout-form/checkout-form.component';
import { IOrder } from '../../../core/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog, private router: Router) { }

  openAuthDialog(): void {
    const authDialogRef = this.dialog.open(AuthDialogComponent, {
      height: '650px',
      width: '530px',
    });

    authDialogRef.afterClosed().subscribe(res => {
      switch (res?.openComponent) {
        case 'ForgotPassword':
          this.openForgotPasswordDialog();
          break;
        case 'Congratulations':
          this.openCongratulationsDialog(
            'You have successfully sign up.'
          );
          break;
        default:
          break;
      }
    });
  }

  openForgotPasswordDialog(): void {
    const forgotDialogRef = this.dialog.open(ForgotPasswordComponent, {
      height: '530px',
      width: '530px',
    });

    forgotDialogRef.afterClosed().subscribe(res => {
      if (res?.openComponent == 'Congratulations') {
        this.openCongratulationsDialog('You have successfully applied new password.', 'Auth')
      }
    })
  }

  openCongratulationsDialog(title: string, componentAfterClosed?: DialogComponentsOptions): void {
    const congratDialogRef = this.dialog.open(CongratulationsComponent, {
      height: '650px',
      width: '530px',
      data: {
        title: title,
        openComponent: componentAfterClosed,
      }
    });

    congratDialogRef.afterClosed().subscribe(res => {
      switch (res?.openComponent) {
        case 'Auth':
          this.openAuthDialog();
          break;
        default: 
          break;  
      }
    })
  }

  openFilterDialog(filters: IFilters | null): void {
    const filterDialogRef = this.dialog.open(FilterDialogComponent, {
      // minHeight: '768px',
      width: '868px',
      data: {
        filters: filters
      }
    });

    filterDialogRef.afterClosed().subscribe(res => {
      if (res?.filters){
        this.router.navigate(['home/search-result'], {queryParams: res.filters})
      }
    })
  }

  openCheckoutDialog(): Observable<any> {
    const checkoutDialogRef = this.dialog.open(CheckoutFormComponent, {
      width: '868px',
      height: '523px',
    });

    return checkoutDialogRef.afterClosed()
  }
}
