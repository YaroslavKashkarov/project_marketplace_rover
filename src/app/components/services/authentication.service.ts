import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISignInRequest } from '../../../core/interfaces/signin-request.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IAuthResult } from '../../../core/interfaces/auth-result.interface';
import { ILoginRequest } from '../../../core/interfaces/login-request.interface';
import { IUser } from '../../../core/interfaces/user.interface';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {

  public $currentUser: Observable<IUser | null>;
  private readonly localStorageKey = 'currentUser';
  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  private isSignedInSubject = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private socialAuthService: SocialAuthService,
    httpClient: HttpClient,
  ) {
    super(httpClient);
    this.$currentUser = this.currentUserSubject.asObservable();

    if (isPlatformBrowser(this.platformId)) {
      const userDataJson = localStorage.getItem(this.localStorageKey);

      if (userDataJson != null) {
        this.currentUserSubject.next(JSON.parse(userDataJson))
      } else {
        this.currentUserSubject.next(null);
      }
    }
    
  }

  public get currentUserValue(): IUser | null {
    return this.currentUserSubject.value;
  }

  public get isSignedIn(): boolean {
    return this.isSignedInSubject.value;
  }

  registerUser(registrationRequest: ISignInRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>('api/auth/signup', registrationRequest)
      .pipe(
        tap((res) => {
          const user: IUser = {
            id: res.id,
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName,
            photo: res.photo,
            city: res.city,
            role: res.role,
            token: res.token,
          }
          localStorage.setItem(this.localStorageKey, JSON.stringify(user));
          this.currentUserSubject.next(user);
        }),
      );
  }

  manualLoginUser(loginRequest: ILoginRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>('api/auth/login', loginRequest)
      .pipe(
        tap((res) => {
          const user: IUser = {
            id: res.id,
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName,
            photo: res.photo,
            city: res.city,
            role: res.role,
            token: res.token,
          }
          localStorage.setItem(this.localStorageKey, JSON.stringify(user));
          this.currentUserSubject.next(user);
        }),
      );
  }

  loginWithGoogle(googleToken: string): Observable<IAuthResult> {
      const body = {
        credential: googleToken,
      };

      return this.post<IAuthResult>('api/auth/google', body)
        .pipe(
          tap((res) => {
            const user: IUser = {
              id: res.id,
              email: res.email,
              firstName: res.firstName,
              lastName: res.lastName,
              photo: res.photo,
              city: res.city,
              role: res.role,
              token: res.token,
            }
            localStorage.setItem(this.localStorageKey, JSON.stringify(user));
            this.currentUserSubject.next(user);
          }),
        );
  }

  logOutUser(): Observable<string> {
    return this.post<string>('api/auth/logout', {})
      .pipe(
        tap(() => {
          localStorage.removeItem(this.localStorageKey);
          this.currentUserSubject.next(null);
        }),
      );
  }

  getUserInfo(): Observable<IUser> {
    return this.get<IUser>('api/auth/current');
  }

  sendRecoveryToken(userEmail: string): Observable<string> {
    const body = {
      email: userEmail
    }
    return this.post<string>('api/auth/send-recovery-token', body)
  }

  resetPassword(token: string, password: string): Observable<string> {
    const body = {
      password: password
    }

    const headers = {
      "Authorization": `Bearer ${token}`
    }
    return this.postWithHeaders<string>('api/auth/reset-password', body, headers)
  }

}
