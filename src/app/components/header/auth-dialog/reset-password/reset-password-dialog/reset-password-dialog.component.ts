import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from '../../../../services/authentication.service';
import { CustomValidators } from '../../../../../validation/custom-validators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ErrorMessagesComponent } from '../../../../../validation/error-messages/error-messages.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';

export interface ResetPasswordInfo {
  token: string;
  email: string;
}

@Component({
  selector: 'app-reset-password-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ErrorMessagesComponent,
  ],
  templateUrl: './reset-password-dialog.component.html',
  styleUrl: './reset-password-dialog.component.scss',
})
export class ResetPasswordDialogComponent implements OnInit {
  resetPasswordForm: FormGroup;
  passwordChanged: boolean = false;
  hide: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResetPasswordInfo,
    private authService: AuthenticationService,
    private dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      CustomValidators.validateConfirmPassword,
    );
  }

  onResetPasswordFormSubmit() {
    Object.keys(this.resetPasswordForm.controls).forEach((key) => {
      this.resetPasswordForm.get(key)?.markAsDirty();
    });

    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.get('password')?.value;
      this.authService.resetPassword(newPassword, this.data.token).subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (errorRes: HttpErrorResponse) => {
          console.log(errorRes);
        },
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
