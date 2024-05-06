import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ISignInRequest } from '../../../core/interfaces/signin-request.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IAuthResult } from '../../../core/interfaces/auth-result.interface';
import { ILoginRequest } from '../../../core/interfaces/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService{

  private readonly localStorageKey = 'userToken';

  private userTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private socialAuthService: SocialAuthService,
    httpClient: HttpClient
  ) {
    super(httpClient);

    const userDataJson = localStorage.getItem('userToken');

    if (userDataJson != null) {
      this.userTokenSubject.next(JSON.parse(userDataJson))
    } else {
      this.userTokenSubject.next(null);
    }
  }

  public get userToken(): string | null {
    return this.userTokenSubject.value;
  }

  registerUser(registrationRequest: ISignInRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>( 'api/auth/signup', registrationRequest)
    .pipe(
      tap((res) => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
        this.userTokenSubject.next(res.token);
      })
    );
  }

  manualLoginUser(loginRequest: ILoginRequest): Observable<IAuthResult>{
    return this.post<IAuthResult>('api/auth/login', loginRequest)
    .pipe(
      tap((res) => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
        this.userTokenSubject.next(res.token);
      })
    );
  }

  loginWithGoogle(){
    this.socialAuthService.authState.subscribe((res) => {
      const body = {
        credential: res.idToken,
      }

      this.post<IAuthResult>('api/auth/google', body)
      .pipe(
        tap((res) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(res.token));
          this.userTokenSubject.next(res.token);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Authentication successful:', response);
        },
        error: (error) => {
          console.error('Authentication failed:', error);
        },
      })
      
    });
  }

}
