import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmationDialogComponent } from './order-confirmation-dialog.component';

describe('OrderConfirmationDialogComponent', () => {
  let component: OrderConfirmationDialogComponent;
  let fixture: ComponentFixture<OrderConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
