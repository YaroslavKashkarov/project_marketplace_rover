import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from '../../../services/authentication.service';
import { ErrorMessagesComponent } from '../../../../validation/error-messages/error-messages.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ErrorMessagesComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  passwordSent: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onForgotPasswordFormSubmit() {
    Object.keys(this.forgotPasswordForm.controls).forEach((key) => {
      this.forgotPasswordForm.get(key)?.markAsDirty();
    });

    if (this.forgotPasswordForm.valid) {
      this.authService.sendRecoveryToken(this.forgotPasswordForm.get('email')?.value).subscribe({
        next: () => {
          this.passwordSent = true;
        },
        error: (err) => console.log(err),
      });
    }
  }
}
