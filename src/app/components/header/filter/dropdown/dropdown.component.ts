import { Component, Input, forwardRef } from '@angular/core';
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
      multi: true
    }
  ]
})
export class DropdownComponent {

  @Input() options: any[];
  @Input() placeholder: string = 'Select an option'; 

  selectedOption: any;
  isOpen: boolean = false;
  disabled = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }

  writeValue(value: any) {
    if (value !== undefined) {
      this.selectedOption = value;
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
    // Implement this if you want to support disabling the control
  }

  selectOption(event: any) {
    const option = event;
    if (option !== null && option !== undefined) {
      this.selectedOption = option;
      this.onChange(option);
      this.onTouch();
      this.isOpen = false; 
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}
