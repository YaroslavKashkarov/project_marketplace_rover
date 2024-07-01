import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { Observable } from 'rxjs';
import { IBasketResult } from './payment-page.component';
import { IPaymentResult } from './payment-result';

@Injectable({
  providedIn: 'root',
})
export class PaymentService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getBasketInfo(): Observable<IBasketResult[]> {
    return this.get<IBasketResult[]>('api/basket');
  }

  getPaymentInfo(productIds: string[]): Observable<IPaymentResult> {
    return this.post<IPaymentResult>('api/payments/pay', {
      productIds: productIds,
    });
  }

  sendPaymentInfo(info: IPaymentResult): Observable<any> {
    return this.postOnExternalResource(
      'https://secure.wayforpay.com/pay',
      info,
    );
  }
}
