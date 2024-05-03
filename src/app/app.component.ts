import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FilterComponent} from './components/header/filter/filter.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';



@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
				CommonModule,
				MatIconModule,
				RouterOutlet,
				HomePageComponent,
				HeaderComponent,
				FilterComponent,
				FooterComponent,
				NavbarComponent
			],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	constructor(iconRegistry: MatIconRegistry) {
		iconRegistry.setDefaultFontSetClass("fa-regular");
	}
}
