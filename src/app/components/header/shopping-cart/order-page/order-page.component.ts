import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../../common-components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { OrderProductComponent } from '../order-product/order-product.component';
import { IOrderProduct } from '../../../../../core/interfaces/order-product';
import { BasketService } from '../basket.service';
import { DialogService } from '../../../services/dialog.service';
import { PaymentService } from '../../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../../../../../core/interfaces/order.interface';

type TransformedProducts = { [key: string]: number };

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [LoaderComponent, CommonModule, OrderProductComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent implements OnInit {
  isLoading: boolean = false;

  private sellerId: string = '';
  products: IOrderProduct[];
  totalSum: number;
  orderReference: number;

  paymentMethod: string;
  orderDetails: any;

  paymentInfo: any;

  constructor(
    private basketService: BasketService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private paymentService: PaymentService,
  ) {
    this.orderReference = Number(this.route.snapshot.queryParams['orderReference']);
  }

  ngOnInit(): void {
    this.processData();
  }

  processData() {
    this.isLoading = true;
    this.basketService.getOrderByReference(this.orderReference).subscribe((res) => {
      this.orderDetails = res;
      this.products = res.products;
      this.calculateTotal();
      this.isLoading = false;
    });
  }

  tranformProducts(products: IOrderProduct[]) {
    return products.reduce((acc, product) => {
      acc[product._id] = product.basketQuantity;
      return acc;
    }, {} as TransformedProducts);
  }

  calculateTotal() {
    this.totalSum = 0;
    this.products.forEach((item) => (this.totalSum += item.quantity * item.price));
  }

  openDialog() {
    this.dialogService.openCheckoutDialog().subscribe((res) => {
      if (res) {
        console.log(res);
        const order: IOrder = {
          sellerId: this.sellerId,
          products: this.tranformProducts(this.products),
          paymentMethod: res.paymentMethod.value,
          deliveryMethod: res.deliveryMethod.value,
          userPhone: res.contacts.phoneNumber,
        };

        this.paymentMethod = res.paymentMethod.value;

        this.basketService.placeOrder(order).subscribe((res) => {
          this.orderDetails = res;

          if (this.paymentMethod == 'online') {
            this.paymentService
              .getPaymentInfo(this.orderDetails.orderReference)
              .subscribe((res) => {
                this.paymentInfo = res;
                this.createAndSubmitPaymentForm();
              });
          } else {
            this.openConfirmDialog(this.orderDetails.orderReference);
          }
        });
      }
    });
  }

  createAndSubmitPaymentForm(): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.acceptCharset = 'utf-8';

    Object.keys(this.paymentInfo).forEach((key) => {
      const value = this.paymentInfo[key];
      if (Array.isArray(value)) {
        value.forEach((val) => this.addFormField(form, key + '[]', val));
      } else {
        this.addFormField(form, key, value);
      }
    });

    this.addFormField(form, 'returnLink', 'http://localhost:4200/shopping-cart/checkout');

    document.body.appendChild(form);
    form.submit();
  }

  addFormField(form: HTMLFormElement, name: string, value: string): void {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  openConfirmDialog(orderNumber: string) {
    this.dialogService.openOrderConfirmationDialog(orderNumber);
  }

  checkPaymentStatus(orderReference: string) {}
}
