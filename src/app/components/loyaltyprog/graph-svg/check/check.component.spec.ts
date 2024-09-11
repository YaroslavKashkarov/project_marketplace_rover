import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphCheckComponent } from './check.component';



describe('CheckComponent', () => {
  let component: GraphCheckComponent;
  let fixture: ComponentFixture<GraphCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
