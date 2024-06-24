import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStartActiveComponent } from './circle-star-active.component';

describe('CircleStartActiveComponent', () => {
  let component: CircleStartActiveComponent;
  let fixture: ComponentFixture<CircleStartActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleStartActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleStartActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
