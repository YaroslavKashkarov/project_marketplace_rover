import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../basket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderProductComponent } from '../order-product/order-product.component';
import { IOrderProduct } from '../../../../../core/interfaces/order-product';
import { DialogService } from '../../../services/dialog.service';
import { IOrder } from '../../../../../core/interfaces/order.interface';

type TransformedProducts = { [key: string]: number };


@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, OrderProductComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit{
  private sellerId: string = '';
  products: IOrderProduct[];
  

  constructor(
    private basketService: BasketService, 
    private router: Router, 
    private dialogService: DialogService,
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['sellerId']) {
      this.sellerId = state['sellerId'];
    }
  }

  ngOnInit(): void {
      this.basketService.getBasketProductsBySeller(this.sellerId).subscribe(
        res =>
          this.products = res
      )
  }

  tranformProducts(products: IOrderProduct[]){
    return products.reduce((acc, product) => {
      acc[product._id] = product.basketQuantity;
      return acc;
    }, {} as TransformedProducts)
  }

  openDialog() {
    this.dialogService.openCheckoutDialog().subscribe(
      res => {
        const order: IOrder = {
          sellerId: this.sellerId,
          products: this.tranformProducts(this.products),
          paymentMethod: res.paymentMethod.value,
          deliveryMethod: res.deliveryMethod.value
        }

        this.basketService.placeOrder(order).subscribe(
          res => {
            console.log(res)
          }
        )
      }
    )
  }

}
