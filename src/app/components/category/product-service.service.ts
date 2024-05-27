import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { Observable } from 'rxjs';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService extends BaseService{

  constructor( httpClient: HttpClient ) {
    super(httpClient)
  }

  getFilteredProducts(filters: any): Observable<IProduct[]>{
    const params = new URLSearchParams(filters).toString();
    return this.get<IProduct[]>(`api/products?${params}`)
  }


}
