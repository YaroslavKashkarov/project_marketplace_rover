import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowForwardComponent } from './arrow-forward.component';

describe('ArrowForwardComponent', () => {
  let component: ArrowForwardComponent;
  let fixture: ComponentFixture<ArrowForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowForwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
