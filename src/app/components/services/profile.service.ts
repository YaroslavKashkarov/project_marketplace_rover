import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getUserProfile(userToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
    });

    return this.http.get<any>('api/auth/current', {headers});
  }
}
