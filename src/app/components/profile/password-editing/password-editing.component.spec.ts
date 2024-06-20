import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEditingComponent } from './password-editing.component';

describe('PasswordEditingComponent', () => {
  let component: PasswordEditingComponent;
  let fixture: ComponentFixture<PasswordEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
