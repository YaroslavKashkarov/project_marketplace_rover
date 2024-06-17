import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { IPaymentResult } from './payment-result';

export interface IBasketResult {
  _id: string,
  title: string,
  photos: [{
    public_id: string,
    secure_url: string,
  }],
  description: string,
  price: number,
  basketId: string,
}

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit{
  basket: IBasketResult[]
  paymentInfo: IPaymentResult;

  constructor(private paymentService: PaymentService, private authService: AuthenticationService){

  }

  ngOnInit(): void {
    if (this.authService.$currentUser){
      this.paymentService.getBasketInfo().subscribe(
        res => {
          this.basket = res;
          this.paymentService.getPaymentInfo(this.basket[0].basketId).subscribe(
            res => {
              this.paymentInfo = res;
            }
          )
        }
      )
    }
  }

  onPaymentClick(){
    this.paymentService.sendPaymentInfo(this.paymentInfo).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
