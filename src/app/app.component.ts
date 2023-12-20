import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {CreateAnItemComponent} from './components/create-an-item/create-an-item.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {HeaderComponent} from './components/home-page/header/header.component';
import {MainComponent} from './components/home-page/main/main.component';
import {FooterComponent} from './components/home-page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePageComponent, HomePageComponent, CreateAnItemComponent, FavoriteComponent, HomePageComponent, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app_marketplace_kufer';
}
