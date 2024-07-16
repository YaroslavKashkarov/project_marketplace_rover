import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/header/filter/filter.component';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {SocialLoginModule} from '@abacritt/angularx-social-login';
import {CarouselComponent} from './components/home-page/carousel/carousel.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {ProfileComponent} from './components/profile/profile/profile.component';

// ------------------------------------------------------------
import {SocialLoginComponent} from './components/social-login/social-login.component';
// ------------------------------------------------------------

// import {CarouselComponent,} from './components/home-page/carousel/carousel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [CommonModule,
      RouterOutlet,
      HomePageComponent,
      HeaderComponent,
      FilterComponent,
      FooterComponent,
      NavbarComponent,
      CarouselComponent,
      ProductCardComponent,
      FavoriteComponent,
      ProfileComponent,
      SocialLoginComponent,
      MatIconModule,
      SocialLoginModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor (iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass("fa-regular");
  }
  images = [
    {
      imageSrc:
        'assets/img/carousel/slide.png',
      imageAlt: 'slide',
      titleText: 'Your Perfect Bicycle Awaits!' + 'Find a bicycle for every' +
        'path. Quality and style in one place',
      titleButton: 'Explore Bicycle',
    },
    {
      imageSrc:
        'assets/img/carousel/slide_1.png',
      imageAlt: 'slide1',
      titleText: 'Style and Comfort on Every Ride!' + 'Enhance your look' +
        ' and + elevate your rides with our selection of accessories and' +
        'apparel',
      titleButton: 'Browse Accessories',
    },
    {
      imageSrc:
        'assets/img/carousel/slide_2.png',
      imageAlt: 'slide2',
      titleText: 'Keep Your Bicycle in Perfect Condition!' + 'Parts, tools,' +
        'and accessories for effective maintenance and repair',
      titleButton: 'Shop Parts',
    },
  ];
}
