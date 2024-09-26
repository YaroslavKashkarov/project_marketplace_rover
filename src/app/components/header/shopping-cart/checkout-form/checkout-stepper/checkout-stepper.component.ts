import { NgTemplateOutlet, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, CdkStepperModule],
  providers: [{ provide: CdkStepper, useExisting: CheckoutStepperComponent }],
  templateUrl: './checkout-stepper.component.html',
  styleUrl: './checkout-stepper.component.scss',
})
export class CheckoutStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
