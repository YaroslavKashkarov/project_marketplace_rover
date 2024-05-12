import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, GoogleSigninButtonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {

  loginForm: FormGroup;
  hide: boolean = true;
  disabled: boolean = false;

  @Output()
  isSuccessful = new EventEmitter<void>();

  @Output()
  forgotPassword = new EventEmitter;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.authService.loginWithGoogle();
  }

  googleLogin() {
    this.authService.loginWithGoogle();
  }

  onLoginFormSubmit() {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsDirty();
    });

    if (this.loginForm.valid) {
      this.disabled = false;
      this.authService.manualLoginUser(this.loginForm.getRawValue()).subscribe(
        {
          next: () => {
            this.isSuccessful.emit();
          },
          error: (err) => console.log(err),
        },
      );
    } else {
      this.disabled = true;
    }
  }

  forgotPasswordClicked() {
    this.forgotPassword.emit();
  }

}
