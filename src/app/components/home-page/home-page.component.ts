import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from "../register/register.component";
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, HeaderComponent, RegisterComponent, RouterModule, RouterOutlet]
})
export class HomePageComponent {

}
