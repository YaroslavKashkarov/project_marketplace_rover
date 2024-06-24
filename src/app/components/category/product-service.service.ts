import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { Observable } from 'rxjs';
import { IProduct } from './product.interface';
import { IProductsResult } from '../../../core/interfaces/products-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService extends BaseService{

  constructor( httpClient: HttpClient ) {
    super(httpClient)
  }

  getFilteredProducts(filters: any): Observable<IProductsResult>{
    const params = new URLSearchParams(filters).toString();
    return this.get<IProductsResult>(`api/products?${params}`)
  }


}
