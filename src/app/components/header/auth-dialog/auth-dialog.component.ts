import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponentsOptions } from '../../../../core/interfaces/dialog-components-options';

export enum DialogContentEnum {
  SignIn,
  Login,
}

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, SignInFormComponent, LoginFormComponent],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss',
})
export class AuthDialogComponent {
  componentToOpen?: DialogComponentsOptions;

  dialogContent: DialogContentEnum = DialogContentEnum.SignIn;
  dialogContentEnum = DialogContentEnum;

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) {}

  openLoginTab() {
    this.dialogContent = DialogContentEnum.Login;
  }

  openSignInTab() {
    this.dialogContent = DialogContentEnum.SignIn;
  }

  closeDialog() {
    this.dialogRef.close({
      openComponent: this.componentToOpen,
    });
  }

  openCongratulations() {
    this.componentToOpen = 'Congratulations';
    this.closeDialog();
  }

  openForgotPassword() {
    this.componentToOpen = 'ForgotPassword';
    this.closeDialog();
  }
}
