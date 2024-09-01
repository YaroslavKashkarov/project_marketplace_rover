import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quantity-input.component.html',
  styleUrl: './quantity-input.component.scss'
})
export class QuantityInputComponent {

  @Input()
  quantity: number;

  @Input()
  maxValue: number;

  @ViewChild('input')
  input: ElementRef;

  @Output()
  quantityChange = new EventEmitter<number>();

  @Output()
  enterClick = new EventEmitter<void>();

  constructor() {}

  increaseQuantity():void {
    this.quantity ++;
    this.input.nativeElement.select();
    setTimeout(() =>  this.input.nativeElement.select(), 0);

    this.quantityChange.emit(this.quantity);
  }

  decreaseQuantity():void {
    this.quantity--;
    this.input.nativeElement.focus();
    setTimeout(() =>  this.input.nativeElement.select(), 0);
    
    this.quantityChange.emit(this.quantity);
  }

  setDefaultValue(ngModel: NgModel): void {
    if (!this.quantity || this.quantity<=0) {
      this.quantity = 1;
      ngModel.control.setValue(1);
    }
  }

  quantityChanged(ngModel: NgModel): void {
    this.quantityChange.emit(this.quantity);
  }
}
