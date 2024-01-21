import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
