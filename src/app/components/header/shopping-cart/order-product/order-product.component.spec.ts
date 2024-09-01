import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductComponent } from './order-product.component';

describe('OrderProductComponent', () => {
  let component: OrderProductComponent;
  let fixture: ComponentFixture<OrderProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
