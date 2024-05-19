import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-loyaltyprog',
  standalone: true,
  imports: [CommonModule,
    ProgressbarComponent, RouterLink],
  templateUrl: './loyaltyprog.component.html',
  styleUrl: './loyaltyprog.component.scss',
})
export class LoyaltyprogComponent {
}
