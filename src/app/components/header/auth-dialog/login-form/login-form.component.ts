import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthenticationService } from '../../../services/authentication.service';
import { CustomValidators } from '../../../../validation/custom-validators';
import { ErrorMessagesComponent } from '../../../../validation/error-messages/error-messages.component';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, GoogleSigninButtonModule, ErrorMessagesComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {

  loginForm: FormGroup;
  hide: boolean = true;

  @Output()
  isSuccessful = new EventEmitter<void>();

  @Output()
  forgotPassword = new EventEmitter;

  constructor(
    private authService: AuthenticationService,
    private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    }, CustomValidators.validateConfirmPassword);

    this.socialAuthService.authState.subscribe((res) => {
      this.authService.loginWithGoogle(res.idToken)
        .subscribe(
          {
            next: () => {
              this.isSuccessful.emit();
            },
            error: (errorResponse: HttpErrorResponse) => {
              const errorsArray: Array<any> = errorResponse.error.message;
              errorsArray.forEach(x=> this.loginForm.get(x.field)?.setErrors({
                'serverError': x.error
              }));
              this.loginForm.markAsUntouched();
            }
          },
        )
    })

  }

  // googleLogin() {
  //   this.authService.loginWithGoogle();
  // }

  onLoginFormSubmit() {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsDirty();
    });

    if (this.loginForm.valid) {
      this.authService.manualLoginUser(this.loginForm.getRawValue()).subscribe(
        {
          next: () => {
            this.isSuccessful.emit();
          },
          error: (errorResponse: HttpErrorResponse) => {
            const errorsArray: Array<any> = errorResponse.error.message;
            errorsArray.forEach(x=> this.loginForm.get(x.field)?.setErrors({
              'serverError': x.error
            }));
            this.loginForm.markAsUntouched();
          }
        },
      );
    }
  }

  forgotPasswordClicked() {
    this.forgotPassword.emit();
  }

}
