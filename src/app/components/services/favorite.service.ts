import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  apiEndoint: string = environment.apiEndoint;

  getFavorite() {
    return this.http.get(`${this.apiEndoint}/api/favorites`); 
  }

  addFavorite(productId: number) {
    const requestData = {productId: productId}
    return this.http.post(`${this.apiEndoint}/api/favorites`, requestData);
  }

}

