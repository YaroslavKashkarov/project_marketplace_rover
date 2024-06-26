import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../../core/base.service';
import { IProduct } from '../category/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends BaseService{

  constructor( httpClient: HttpClient ) {
    super(httpClient)
  }

  getFavorite():Observable<IProduct[]> {
    return this.get('api/favorites'); 
  }

  addFavorite(productId: number): Observable<IProduct[]> {
    const requestData = {productId: productId};
    return this.post<IProduct[]>('api/favorites', requestData);
  }

  removeFavorite(productId: number): Observable<IProduct[]> {
    return this.delete<IProduct[]>(`api/favorites/${productId}`);
  }

}

