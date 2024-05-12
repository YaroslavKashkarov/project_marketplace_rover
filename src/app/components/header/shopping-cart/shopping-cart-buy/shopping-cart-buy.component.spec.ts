import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBuyComponent } from './shopping-cart-buy.component';

describe('ShoppingCartBuyComponent', () => {
  let component: ShoppingCartBuyComponent;
  let fixture: ComponentFixture<ShoppingCartBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
