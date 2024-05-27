import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStarComponent } from './circle-star.component';

describe('CircleStarComponent', () => {
  let component: CircleStarComponent;
  let fixture: ComponentFixture<CircleStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleStarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
