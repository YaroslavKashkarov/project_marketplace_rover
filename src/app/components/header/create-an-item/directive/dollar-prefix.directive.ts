import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDollarPrefix]',
  standalone: true,
})
export class DollarPrefixDirective {
  private regex: RegExp = new RegExp(/^\$/);

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const input = this.el.nativeElement as HTMLInputElement;
    if (!this.regex.test(value)) {
      input.value = `$${value}`;
    } else {
      input.value = value;
    }
  }
}
