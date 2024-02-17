import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'
import {HomePageComponent} from './components/home-page/home-page.component'
import {FooterComponent} from './components/footer/footer.component'
import {NavbarComponent} from './components/navbar/navbar.component'
import {HeaderComponent} from './components/header/header.component'
import {
  CarouselComponent,
} from './components/home-page/carousel/carousel.component'
import {FilterComponent} from './components/header/filter/filter.component'


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
      CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'project_marketplace_rover';
  images = [
    {
      imageSrc:
        'assets/img/carousel/slide.png',
      imageAlt: 'slide',
      description: 'Your Perfect Bicycle Awaits!' + 'Find a bicycle for every' +
        ' path. Quality and style in one place',
      button: 'Explore Bicycle',
    },
    {
      imageSrc:
        'assets/img/carousel/slide_1.png',
      imageAlt: 'slide1',
      description: 'Style and Comfort on Every Ride!' + 'Enhance your look and elevate your rides with our selection of accessories and apparel',
      button: 'Browse Accessories',
    },
    {
      imageSrc:
        'assets/img/carousel/slide_2.png',
      imageAlt: 'slide2',
      description: 'Keep Your Bicycle in Perfect Condition!' + 'Parts, tools,' +
        ' and accessories for effective maintenance and repair',
      button: 'Shop Parts',
    },
  ];
}
