import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphCircleStarComponentActive } from './circle-star-active.component';


describe('CircleStartActiveComponent', () => {
  let component: GraphCircleStarComponentActive;
  let fixture: ComponentFixture<GraphCircleStarComponentActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCircleStarComponentActive]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphCircleStarComponentActive)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
