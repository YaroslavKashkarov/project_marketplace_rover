import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from '../header/filter/filter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

}
