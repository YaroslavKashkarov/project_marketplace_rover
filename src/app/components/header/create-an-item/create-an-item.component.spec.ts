import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnItemComponent } from './create-an-item.component';

describe('CreateAnItemComponent', () => {
  let component: CreateAnItemComponent;
  let fixture: ComponentFixture<CreateAnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAnItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
