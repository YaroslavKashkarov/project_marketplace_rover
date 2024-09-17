import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyprogComponent } from './loyaltyprog.component';

describe('LoyaltyprogComponent', () => {
  let component: LoyaltyprogComponent;
  let fixture: ComponentFixture<LoyaltyprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyprogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoyaltyprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
