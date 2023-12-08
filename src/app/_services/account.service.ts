import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../_models/user';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  authUrl = environment.authUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(public http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.authUrl + 'local/signin', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.currentUserSource.next(user);
        }
      })
    )
  }

  loginFb(model: any) {
    return this.http.post<User>(this.authUrl + 'login/facebook', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.authUrl + 'local/signup', model).pipe(
      map(response => {
        console.log(response);
        // const user = response;
        // if (user) {
        //   this.currentUserSource.next(user);
        // }
      })
    )
  }

  logout() {
    this.currentUserSource.next(null);
  }
}
