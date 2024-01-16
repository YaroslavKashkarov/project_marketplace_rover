import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {CarouselComponent} from '../carousel/carousel.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CarouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
