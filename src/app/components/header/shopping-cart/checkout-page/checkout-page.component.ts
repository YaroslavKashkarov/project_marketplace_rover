import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../basket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrderProductComponent } from '../order-product/order-product.component';
import { IOrderProduct } from '../../../../../core/interfaces/order-product';
import { DialogService } from '../../../services/dialog.service';
import { IOrder } from '../../../../../core/interfaces/order.interface';
import { PaymentService } from '../../../services/payment.service';
import { LoaderComponent } from '../../../common-components/loader/loader.component';

type TransformedProducts = { [key: string]: number };


@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, OrderProductComponent, LoaderComponent, RouterLink],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit{
  isLoading: boolean = false;

  private sellerId: string = '';
  products: IOrderProduct[];
  totalSum: number;

  paymentMethod: string;
  orderDetails: any;

  paymentInfo: any;
  

  constructor(
    private basketService: BasketService, 
    private router: Router, 
    private dialogService: DialogService,
    private paymentService: PaymentService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['sellerId']) {
      this.sellerId = state['sellerId'];
    }
  }

  ngOnInit(): void {
    this.processData()
  }

  processData(){
    this.isLoading = true;
    this.basketService.getBasketProductsBySeller(this.sellerId).subscribe(
      res => {
        this.products = res;
        this.calculateTotal();
        this.isLoading = false;
      }
    )
  }

  tranformProducts(products: IOrderProduct[]){
    return products.reduce((acc, product) => {
      acc[product._id] = product.basketQuantity;
      return acc;
    }, {} as TransformedProducts)
  }

  calculateTotal(){
    this.totalSum = 0;
    this.products.forEach((item)=> this.totalSum += item.quantity * item.price);
  }

  openDialog() {
    this.dialogService.openCheckoutDialog().subscribe(
      res => {
        if (res) {
          console.log(res);
          const order: IOrder = {
            sellerId: this.sellerId,
            products: this.tranformProducts(this.products),
            paymentMethod: res.paymentMethod.value,
            deliveryMethod: res.deliveryMethod.value,
            userPhone: res.contacts.phoneNumber,
          }
  
          this.paymentMethod = res.paymentMethod.value;
  
          this.basketService.placeOrder(order).subscribe(
            res => {
              this.orderDetails = res;
  
              if (this.paymentMethod == 'online'){
                this.paymentService.getPaymentInfo(this.orderDetails.orderReference).subscribe(
                  res => {
                    this.paymentInfo = res;
                    this.createAndSubmitPaymentForm()
                  }
                )
              } else {
                this.openConfirmDialog(this.orderDetails.orderReference)
              }
            }
          )
        }
      }
    )
  }

  createAndSubmitPaymentForm(): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.acceptCharset = 'utf-8';

    Object.keys(this.paymentInfo).forEach(key => {
      const value = this.paymentInfo[key];
      if (Array.isArray(value)) {
        value.forEach(val => this.addFormField(form, key + '[]', val));
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

  openConfirmDialog(orderNumber: string){
    this.dialogService.openOrderConfirmationDialog(orderNumber);
  }

  checkPaymentStatus(orderReference: string){
    
  }

}  
