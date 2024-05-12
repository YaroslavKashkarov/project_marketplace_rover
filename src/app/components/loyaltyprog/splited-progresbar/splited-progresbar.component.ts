import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splited-progresbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splited-progresbar.component.html',
  styleUrl: './splited-progresbar.component.scss',
  template:`
  <div *ngFor="let index of indices" class="loading-bar"></div>`
})
export class SplitedProgresbarComponent {
  @Input() count: number = 15;
  blocks = Array(15).fill(0); // 15 блоків

  get indices() {
    return Array.from({ length: this.count }, (_, index) => index);
  }
  
}
