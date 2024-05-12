import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { ISignInRequest } from '../../../core/interfaces/signin-request.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IAuthResult } from '../../../core/interfaces/auth-result.interface';
import { ILoginRequest } from '../../../core/interfaces/login-request.interface';
import { IUser } from '../../../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {

  public $isSignedIn: Observable<boolean>;
  private readonly localStorageKey = 'userToken';
  private userTokenSubject = new BehaviorSubject<string | null>(null);
  private isSignedInSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private socialAuthService: SocialAuthService,
    httpClient: HttpClient,
  ) {
    super(httpClient);
    this.$isSignedIn = this.isSignedInSubject.asObservable();

    const userDataJson = localStorage.getItem('userToken');

    if (userDataJson != null) {
      this.userTokenSubject.next(JSON.parse(userDataJson));
    } else {
      this.userTokenSubject.next(null);
    }
  }

  public get userToken(): string | null {
    return this.userTokenSubject.value;
  }

  public get isSignedIn(): boolean {
    return this.isSignedInSubject.value;
  }

  registerUser(registrationRequest: ISignInRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>('api/auth/signup', registrationRequest)
      .pipe(
        tap((res) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
          this.userTokenSubject.next(res.token);
          this.isSignedInSubject.next(true);
        }),
      );
  }

  manualLoginUser(loginRequest: ILoginRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>('api/auth/login', loginRequest)
      .pipe(
        tap((res) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
          this.userTokenSubject.next(res.token);
          this.isSignedInSubject.next(true);
          console.log(res.token);
        }),
      );
  }

  loginWithGoogle() {
    this.socialAuthService.authState.subscribe((res) => {
      const body = {
        credential: res.idToken,
      };

      this.post<IAuthResult>('api/auth/google', body)
        .pipe(
          tap((res) => {
            localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
            this.userTokenSubject.next(res.token);
            this.isSignedInSubject.next(true);
          }),
        )
        .subscribe({
          next: (response) => {
            console.log('Authentication successful:', response);
          },
          error: (error) => {
            console.error('Authentication failed:', error);
          },
        });

    });
  }

  logOutUser(): Observable<string> {
    return this.post<string>('api/auth/logout', {})
      .pipe(
        tap(() => {
          localStorage.removeItem(this.localStorageKey);
          this.isSignedInSubject.next(false);
        }),
      );
  }

  getUserInfo(): Observable<IUser> {
    return this.get<IUser>('api/auth/current');
  }

}
