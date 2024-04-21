import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// ----------------------------------------------------------------------
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// ----------------------------------------------------------------------

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('474772526771-bkj1691fuq6b31qlgd5apilr7or4d9lv.apps.googleusercontent.com'),
          },
        ],
        onError: (err) => {
          console.log(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
};
