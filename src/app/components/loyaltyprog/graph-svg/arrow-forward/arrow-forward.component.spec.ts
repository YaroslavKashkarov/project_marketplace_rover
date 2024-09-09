import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphArrowForwardComponent } from './arrow-forward.component';



describe('ArrowForwardComponent', () => {
  let component: GraphArrowForwardComponent;
  let fixture: ComponentFixture<GraphArrowForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphArrowForwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphArrowForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
