import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService extends BaseService{

  constructor( httpClient: HttpClient,) {
    super(httpClient);
  }

  getBrandsByCategory(category: string) :Observable<any[]> {
    return this.get<any[]>(`api/brands/${category}`)
  }
}
