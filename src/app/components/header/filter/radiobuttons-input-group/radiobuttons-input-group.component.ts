import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface IRadiobuttonsInputOptions {
  title: string;
  filterName: string;
  options: IOption[];
}

export interface IOption {
  key: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-radiobuttons-input-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radiobuttons-input-group.component.html',
  styleUrl: './radiobuttons-input-group.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadiobuttonsInputGroupComponent,
      multi: true,
    },
  ],
})
export class RadiobuttonsInputGroupComponent implements ControlValueAccessor {
  @Input()
  setting: IRadiobuttonsInputOptions;

  onChange = (value: string) => {};
  onTouched = () => {};

  selectedOption: IOption | null = null;

  writeValue(value: string): void {
    const option = this.setting.options.find((x) => x.value == value);
    if (option) {
      this.selectOption(option);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectOption(option: IOption) {
    this.setting.options.forEach((x) => (x.selected = false));
    option.selected = true;
    this.selectedOption = option;
    this.onChange(option.value);
    this.onTouched();
  }
}
