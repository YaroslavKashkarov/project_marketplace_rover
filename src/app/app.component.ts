import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/header/filter/filter.component';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {SocialLoginModule} from '@abacritt/angularx-social-login';
import {
	CarouselComponent,
} from './components/home-page/carousel/carousel.component';
import {
	ProductCardComponent,
} from './components/product-card/product-card.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {ProfileComponent} from './components/profile/profile/profile.component';

// ------------------------------------------------------------
import {
	SocialLoginComponent,
} from './components/social-login/social-login.component';
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
	isAScrollButtonVisible: boolean = false;

	constructor(iconRegistry: MatIconRegistry) {
		iconRegistry.setDefaultFontSetClass('fa-regular');
	}

	@HostListener('window:scroll', [])

	onWindowScroll(): void {
		this.isAScrollButtonVisible = window.scrollY > 200;
	}

	scrollToTop(): void {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
}
