import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ISignInRequest } from '../../../core/interfaces/signin-request.interface';
import { Observable } from 'rxjs';
import { IAuthResult } from '../../../core/interfaces/auth-result.interface';
import { ILoginRequest } from '../../../core/interfaces/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService{

  constructor(
    private socialAuthService: SocialAuthService,
    httpClient: HttpClient
  ) {
    super(httpClient);
  }

  registerUser(registrationRequest: ISignInRequest): Observable<IAuthResult> {
    return this.post<IAuthResult>( 'api/auth/signup', registrationRequest);
  }

  manualLoginUser(loginRequest: ILoginRequest): Observable<IAuthResult>{
    return this.post<IAuthResult>('api/auth/login', loginRequest);
  }

  loginWithGoogle(){
    this.socialAuthService.authState.subscribe((res) => {
      const body = {
        credential: res.idToken,
      }

      this.sendCredential(body).subscribe({
        next: (response) => {
          console.log('Authentication successful:', response);
        },
        error: (error) => {
          console.error('Authentication failed:', error);
        },
      })
      
    });
  }

  sendCredential(request: any): Observable<IAuthResult>{
    return this.post<IAuthResult>('api/auth/google', request);
  }
}
