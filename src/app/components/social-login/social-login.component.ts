import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  imports: [CommonModule, GoogleSigninButtonModule, HttpClientModule],
  selector: 'app-social-login',
  standalone: true,
  styleUrl: './social-login.component.scss',
  templateUrl: './social-login.component.html',
})
export class SocialLoginComponent implements OnInit {

  private accessToken = '';

  constructor(private authService: SocialAuthService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.getAccessToken();
      this.getGoogleCalendarData();
    });
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken;
      console.log(accessToken, 'asasas');
    });
  }

  getGoogleCalendarData(): void {
    if (!this.accessToken) return;

    this.httpClient
      .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: {Authorization: `Bearer ${this.accessToken}`},
      })
      .subscribe((events) => {
        alert('Look at your console');
        console.log('events', events);
      });
  }
}
