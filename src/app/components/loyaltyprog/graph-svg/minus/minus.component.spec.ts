import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMinusComponent } from './minus.component';

describe('MinusComponent', () => {
  let component: GraphMinusComponent;
  let fixture: ComponentFixture<GraphMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphMinusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
