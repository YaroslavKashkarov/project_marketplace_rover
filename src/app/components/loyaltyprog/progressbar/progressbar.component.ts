import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
  template: '<app-loading-bars [percent]="yourPercentageValue"></app-loading-bars>',
})
export class ProgressbarComponent {
  yourPercentageValue: number = 10; // значення відсотка тут
}
