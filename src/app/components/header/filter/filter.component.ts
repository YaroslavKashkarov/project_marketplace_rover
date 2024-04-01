import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  isFilterClose: boolean = false;

  closeFilter(event: Event): void {
    event.preventDefault();
    this.isFilterClose = !this.isFilterClose;
  }
}
