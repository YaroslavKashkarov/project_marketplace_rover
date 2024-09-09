import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphCircleStarComponent } from './circle-star.component';



describe('CircleStarComponent', () => {
  let component: GraphCircleStarComponent;
  let fixture: ComponentFixture<GraphCircleStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCircleStarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphCircleStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
