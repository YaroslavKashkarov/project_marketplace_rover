import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../components/services/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // add authorization header with jwt token if available
      let isSignedIn = this.authService.isSignedIn;
      let userToken = this.authService.userToken;
      if (isSignedIn && userToken) {
          request = request.clone({
              setHeaders: {
                  "Authorization": `Bearer ${userToken}`
              }
          });
      }

      return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authService.logOutUser();
            this.router.navigate(['']);
          }
        }
        return throwError(err)
      }));
    }
}