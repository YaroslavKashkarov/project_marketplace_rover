import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphArrowRightComponent } from './arrow-right.component';

describe('ArrowRightComponent', () => {
  let component: GraphArrowRightComponent;
  let fixture: ComponentFixture<GraphArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphArrowRightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
