import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [CommonModule,
      RouterOutlet,
      HomePageComponent,
      FooterComponent,
      NavbarComponent,
      HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app_marketplace_kufer';
}
