import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_LABEL, PASS_ERRORS } from '../../../data/form-data';
import { TogglePasswordEditing } from '../../../servises/toggle-profile';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

// import { samePassword } from '../../../servises/same-password';

@Component({
  selector: 'app-password-editing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-editing.component.html',
  styleUrl: './password-editing.component.scss',
})
export class PasswordEditingComponent implements OnInit {
  label = FORM_LABEL;
  passErrors = PASS_ERRORS;
  passForm!: FormGroup;
  passValue$!: Observable<string>;
  confValue$!: Observable<string>;
  passValue!: any;
  confValue!: any;

  private inputValue = new Subject<any>();

  constructor(public togglePasswordEditing: TogglePasswordEditing, private fb: FormBuilder) {
  }

  get password(): AbstractControl {
    return this.passForm.controls['password'];
  }

  get confirmPassword(): AbstractControl {
    return this.passForm.controls['confirmPassword'];
  }

  onInputPass(value: any) {
    this.passValue = value;
  }

  onInputConfPass(value: any) {
    this.confValue = value;
  }

  PassConfPassValidation() {

  }

  ngOnInit() {
    this.initializeForm();
    // samePassword(this.passValue, this.confValue);
  }

  closeEditing(): void {
    this.togglePasswordEditing.isPasswordEditingVisible = false;
  }

  private initializeForm(): void {
    this.passForm = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    });
  }

}
