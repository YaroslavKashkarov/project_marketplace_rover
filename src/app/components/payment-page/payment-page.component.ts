import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { IPaymentResult } from './payment-result';

export interface IBasketResult {
  _id: string;
  title: string;
  photos: [
    {
      public_id: string;
      secure_url: string;
    },
  ];
  description: string;
  price: number;
  basketId: string;
}

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss',
})
export class PaymentPageComponent implements OnInit {
  basket: IBasketResult[];
  paymentInfo: IPaymentResult;

  constructor(
    private paymentService: PaymentService,
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    if (this.authService.$currentUser) {
      this.paymentService.getBasketInfo().subscribe((res) => {
        this.basket = res;
        this.paymentService
          .getPaymentInfo(this.basket[0].basketId)
          .subscribe((res) => {
            this.paymentInfo = res;
          });
      });
    }
  }

  onPaymentClick(): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.acceptCharset = 'utf-8';

    const formFields = {
      merchantAccount: 'test_merch_n1',
      merchantAuthType: 'SimpleSignature',
      merchantDomainName: 'www.market.ua',
      orderReference: 'DH1718626750',
      orderDate: '1415379863',
      amount: '1547.36',
      currency: 'UAH',
      orderTimeout: '49000',
      productName: [
        'Процессор Intel Core i5-4670 3.4GHz',
        'Память Kingston DDR3-1600 4096MB PC3-12800',
      ],
      productPrice: ['1000', '547.36'],
      productCount: ['1', '1'],
      clientFirstName: 'Вася',
      clientLastName: 'Пупкин',
      clientAddress: 'пр. Гагарина, 12',
      clientCity: 'Днепропетровск',
      clientEmail: 'some@mail.com',
      defaultPaymentSystem: 'card',
      merchantSignature: 'f73f326811aca16b946fd1b53a1303e7',
    };

    for (const [key, value] of Object.entries(formFields)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `${key}[]`;
          input.value = v;
          form.appendChild(input);
        });
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }
  //
  // onPaymentClick(){
  //   this.paymentService.sendPaymentInfo(this.paymentInfo).subscribe(
  //     res => {
  //       console.log(res)
  //     }
  //   )
  // }
}
