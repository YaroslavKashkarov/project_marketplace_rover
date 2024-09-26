import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitedProgresbarComponent } from './splited-progresbar.component';

describe('SplitedProgresbarComponent', () => {
  let component: SplitedProgresbarComponent;
  let fixture: ComponentFixture<SplitedProgresbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitedProgresbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitedProgresbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
