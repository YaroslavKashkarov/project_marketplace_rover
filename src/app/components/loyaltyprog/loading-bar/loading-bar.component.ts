// progress-bar.component.ts

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  template: `
    <div class="progress-bar">
      <div *ngFor="let block of blocks" [ngClass]="{'filled': block <= progress}"></div>
    </div>
  `,
  styles: [`
    .progress-bar {
      display: flex;
      width: 100%;
    }
    
    .progress-bar div {
      flex: 1;
      height: 20px;
      margin: 0 2px;
      background-color: #ccc;
    }

    .progress-bar .filled {
      background-color: #4caf50;
    }
  `],
  standalone: true,
  imports: [NgClass]
})
export class ProgressBarComponent {
  @Input() progress: number;

  get blocks(): number[] {
    return Array.from({ length: 15 }, (_, index) => (index + 1) * 20);
  }
}
