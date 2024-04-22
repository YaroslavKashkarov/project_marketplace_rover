import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/header/filter/filter.component';



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
				NavbarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {

}
