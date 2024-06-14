import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonsInputGroupComponent } from './radiobuttons-input-group.component';

describe('RadiobuttonsInputGroupComponent', () => {
  let component: RadiobuttonsInputGroupComponent;
  let fixture: ComponentFixture<RadiobuttonsInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiobuttonsInputGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiobuttonsInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
