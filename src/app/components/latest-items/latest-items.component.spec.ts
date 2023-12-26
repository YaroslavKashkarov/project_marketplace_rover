import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestItemsComponent } from './latest-items.component';

describe('LatestItemsComponent', () => {
  let component: LatestItemsComponent;
  let fixture: ComponentFixture<LatestItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
