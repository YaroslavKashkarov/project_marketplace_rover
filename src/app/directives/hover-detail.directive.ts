import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDetail]',
  standalone: true
})
export class HoverDetailDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseenter') onMouseEnter() {
    this.showDetails(true);
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.showDetails(false);
  }


  private showDetails(show: boolean) {
    const details = this.el.nativeElement.querySelector('.details');
    if (details) {
      this.renderer.setStyle(details, 'display', show ? 'block' : 'none');
    }
  }
}
