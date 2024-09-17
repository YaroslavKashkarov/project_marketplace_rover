import { BaseService } from './../../../../../core/base.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOrderProduct } from '../../../../../core/interfaces/order-product';
import { QuantityInputComponent } from '../../../common-components/quantity-input/quantity-input.component';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-order-product',
  standalone: true,
  imports: [CommonModule, QuantityInputComponent],
  templateUrl: './order-product.component.html',
  styleUrl: './order-product.component.scss',
})
export class OrderProductComponent {
  @Input()
  product: IOrderProduct;

  @Output()
  productChanged = new EventEmitter<boolean>();
  public errorMessage: string;

  constructor(private basketService: BasketService) {}

  productQuantityChanged(productId: string, quantity: number) {
    console.log(productId, quantity, 'pr id anf quant');
    this.basketService.updateBasket(productId, quantity).subscribe({
      next: (res) => {
        this.productChanged.emit(true);
      },
      error: (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        }
      },
    });
  }

  deleteProduct(productId: string) {
    this.basketService
      .deleteProductFromBasket(productId)
      .subscribe((res) => this.productChanged.emit(true));
  }
}
