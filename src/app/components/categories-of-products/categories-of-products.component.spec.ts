import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesOfProductsComponent } from './categories-of-products.component';

describe('CategoriesOfProductsComponent', () => {
  let component: CategoriesOfProductsComponent;
  let fixture: ComponentFixture<CategoriesOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesOfProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
