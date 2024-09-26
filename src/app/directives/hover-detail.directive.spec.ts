import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverDetailDirective } from './hover-detail.directive';
import { By } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Component({
  template: `
    <div id="product" hoverDetail>
      <div class="product__details" style="display: none;">Details</div>
    </div>
  `,
  standalone: true,
  imports: [HoverDetailDirective],
})
class TestComponent {}

describe('HoverDetailDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let renderer: Renderer2;
  let productElement: HTMLElement;
  let detailsElement: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
    productElement = fixture.debugElement.query(By.css('#product')).nativeElement;
    detailsElement = fixture.debugElement.query(By.css('.product__details')).nativeElement;

    renderer = fixture.componentRef.injector.get(Renderer2);
    spyOn(renderer, 'setStyle');
  });

  it('should create an instance', () => {
    expect(productElement).toBeTruthy();
    expect(detailsElement).toBeTruthy();
  });

  it('should show details on mouse enter', () => {
    const event = new Event('mouseenter');
    productElement.dispatchEvent(event);

    expect(renderer.setStyle).toHaveBeenCalledWith(detailsElement, 'display', 'block');
  });

  it('should hide details on mouse leave', () => {
    const event = new Event('mouseleave');
    productElement.dispatchEvent(event);

    expect(renderer.setStyle).toHaveBeenCalledWith(detailsElement, 'display', 'none');
  });

  it('should do nothing if details element is not found', () => {
    detailsElement.remove();
    const event = new Event('mouseenter');
    productElement.dispatchEvent(event);

    expect(renderer.setStyle).not.toHaveBeenCalled();
  });
});
