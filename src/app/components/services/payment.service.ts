import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getPaymentInfo(orderReference: string) {
    const reference = encodeURIComponent(orderReference);
    return this.post(`api/payments/pay/${reference}`, {});
  }
}
