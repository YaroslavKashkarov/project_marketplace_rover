import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { CreateAnItemComponent } from './components/create-an-item/create-an-item.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from "./components/home-page/header/header.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink,HomePageComponent, HomePageComponent, CreateAnItemComponent, FavoriteComponent, HomePageComponent, HeaderComponent, RegisterComponent, HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'app_marketplace_kufer';
}
