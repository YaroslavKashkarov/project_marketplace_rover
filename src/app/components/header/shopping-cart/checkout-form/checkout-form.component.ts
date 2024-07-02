import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkStepper} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AuthenticationService } from '../../../services/authentication.service';
import { IUser } from '../../../../../core/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, MatStepperModule, CdkStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRadioModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
})
export class CheckoutFormComponent implements OnInit, OnDestroy{

  closeDialog(){}

  currentUser: IUser | null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  userSubscription: Subscription;

  deliveryMethods = [
    {key: 'Self-pickup', value: 'self_pickup'},
    {key: 'Ukrposhta', value: 'ukr'},
    {key: 'Nova Poshta', value: 'nova'},
  ]

  peymentMethods = [
    {key: 'Cash on delivery', value: 'cash'},
    {key: 'Online by card', value: 'online'},
  ]

  constructor(
    private _formBuilder: FormBuilder, 
    private authService: AuthenticationService,
    public dialogRef: MatDialogRef<CheckoutFormComponent>,
  ) {
    this.userSubscription = this.authService.$currentUser.subscribe(user => {
      this.currentUser = user;
    });

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      phoneNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      deliveryMethod: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      paymentMethod: ['', Validators.required]
    });

    if (this.currentUser){
      this.firstFormGroup.patchValue(this.currentUser)
    }
  }

  placeOrder(){
    this.dialogRef.close({
      contacts: this.firstFormGroup.getRawValue(),
      deliveryMethod: this.secondFormGroup.get('deliveryMethod'),
      paymentMethod: this.thirdFormGroup.get('paymentMethod'),
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
