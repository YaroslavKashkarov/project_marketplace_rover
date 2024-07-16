import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-create-an-item',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './create-an-item.component.html',
	styleUrl: './create-an-item.component.scss',
})
export class CreateAnItemComponent {
	isCreateItemVisible: boolean = false;
	inputText: string = '';
	maxWords: number = 1000;
	wordCount: number = 1;

	countWords(): void {
		this.wordCount = this.inputText.length;
		if (this.wordCount > this.maxWords) {
			this.inputText = this.inputText.substring(0, this.maxWords);
			this.wordCount = this.maxWords;
		}
	}
}
