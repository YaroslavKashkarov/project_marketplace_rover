import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl, NgControl,ControlValueAccessor,ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';
import { TextInputComponent } from "../../_forms/text-input/text-input.component";


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
  imports: [CommonModule, TextInputComponent, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit{
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup = new FormGroup({});
  validationErrors: string[] | undefined;

  constructor(private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.checkStrenthValidationFn('numbers'), this.checkStrenthValidationFn('lowerLetters'), this.checkStrenthValidationFn('upperLetters'), this.checkStrenthValidationFn('symbols')]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]],
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : { notMatching: true }
    }
  }

  checkStrength(p: string, patternTypes: string) {
    var type = patternTypes;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/;
    var res: boolean = false;
    switch (type) {
      case 'lowerLetters':
        res = /[a-z]+/.test(p);
        break;
      case 'upperLetters':
        res = /[A-Z]+/.test(p);
        break;
      case 'numbers':
        res = /[0-9]+/.test(p);
        break;
      case 'symbols':
        res = regex.test(p);
        break;
    }
    return res;
  }

  checkStrenthValidationFn(patternTypes: string): ValidatorFn {
    var pattern: {}
    return (control: AbstractControl) => {
      return this.checkStrength(control.value, patternTypes) ? null : { [patternTypes]: true };
    }
  }

  register() {
    const values = { ...this.registerForm.value}

    this.accountService.register(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
      },
      error: error => {
        this.validationErrors = error
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
