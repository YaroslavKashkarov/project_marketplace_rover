import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressbarComponent} from './progressbar/progressbar.component';



@Component({
  selector: 'app-loyaltyprog',
  standalone: true,
  imports: [CommonModule,
            ProgressbarComponent],
  templateUrl: './loyaltyprog.component.html',
  styleUrl: './loyaltyprog.component.scss',
})
export class LoyaltyprogComponent {
}
