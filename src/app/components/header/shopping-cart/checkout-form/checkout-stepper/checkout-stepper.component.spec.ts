import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepperComponent } from './checkout-stepper.component';

describe('CheckoutStepperComponent', () => {
  let component: CheckoutStepperComponent;
  let fixture: ComponentFixture<CheckoutStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
