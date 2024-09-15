import { Component, ElementRef, HostListener, Input, Renderer2, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent {
  @Input() options: any[];
  @Input() placeholder: string = 'Select an option';
  @Input() outlined: boolean = true;

  selectedOption: any;
  isOpen: boolean = false;
  disabled = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.isOpen = false;
      }
    });
  }

  writeValue(value: any) {
    if (value !== undefined) {
      const selectedOption = this.options.find((x) => x.value === value);
      this.selectedOption = selectedOption;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectOption(event: any) {
    const option = event;
    if (option !== null && option !== undefined) {
      this.selectedOption = option;
      this.onChange(option.value);
      this.onTouch();
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
