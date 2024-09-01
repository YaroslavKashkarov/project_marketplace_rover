import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellerItemComponent } from './view-seller-item.component';

describe('ViewSellerItemComponent', () => {
  let component: ViewSellerItemComponent;
  let fixture: ComponentFixture<ViewSellerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSellerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
