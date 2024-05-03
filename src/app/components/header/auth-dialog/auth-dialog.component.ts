import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


export enum DialogContentEnum{
  SignIn,
  Login
}

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, SignInFormComponent, LoginFormComponent],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss'
})
export class AuthDialogComponent {

  dialogContent: DialogContentEnum = DialogContentEnum.SignIn;
  dialogContentEnum = DialogContentEnum

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>){}

  openLoginTab(){
    this.dialogContent = DialogContentEnum.Login;
  }

  openSignInTab(){
    this.dialogContent = DialogContentEnum.SignIn;
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
