import { Injectable } from '@angular/core';
import { BaseService } from '../../../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../category/product.interface';
import { IOrderProduct } from '../../../../core/interfaces/order-product';
import { IOrder } from '../../../../core/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService extends BaseService{

  constructor(httpClient: HttpClient) { 
    super(httpClient)
  }

  getBasketProducts(): Observable<IOrderProduct[]> {
    return this.get<IOrderProduct[]>('api/basket')
  }

  getBasketProductsBySeller(sellerId: string): Observable<IOrderProduct[]> {
    return this.get<IOrderProduct[]>(`api/basket?sellerId=${sellerId}`)
  }

  updateBasket(productId: string, quantity: number){
    const body = {
      productId: productId,
      basketQuantity: quantity
    }

    return this.patch('api/basket', body)
  }

  deleteProductFromBasket(productId: string){
    return this.delete(`api/basket/${productId}`)
  }

  placeOrder(order: IOrder){ 
    return this.post('api/orders', order)
  }
}