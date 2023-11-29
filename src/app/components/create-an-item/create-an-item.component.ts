import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-create-an-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-an-item.component.html',
  styleUrl: './create-an-item.component.scss',
})
export class CreateAnItemComponent {
  inputText: string = '';
  maxWords: number = 100;
  wordCount: number = 0;

  countWords() {
    this.wordCount = this.inputText.length;

    if (this.wordCount > this.maxWords) {
      this.inputText = this.inputText.substring(0, this.wordCount = this.maxWords);
    }
  }
}
