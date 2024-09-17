import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphCircleStarActiveComponent } from './circle-star-active.component';

describe('CircleStartActiveComponent', () => {
  let component: GraphCircleStarActiveComponent;
  let fixture: ComponentFixture<GraphCircleStarActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCircleStarActiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphCircleStarActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
