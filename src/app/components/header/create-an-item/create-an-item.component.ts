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
	photos: string[] = [];
	inputText: string = '';
	maxWords: number = 1000;
	wordCount: number = 1;
	index: any;

	onFileInputClick(): void {
		const fileInput = document.getElementById('photo-input') as HTMLInputElement;
		fileInput.click();
	}

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			Array.from(input.files).forEach(file => {
				const reader = new FileReader();
				reader.onload = () => {
					if (typeof reader.result === 'string') {
						this.photos.push(reader.result);
					}
				};
				reader.readAsDataURL(file);
			});
		}
	}

	deleteFoto(index: number): void {
		this.photos.splice(index, 1);
	}

	countWords(): void {
		this.wordCount = this.inputText.length;
		if (this.wordCount > this.maxWords) {
			this.inputText = this.inputText.substring(0, this.maxWords);
			this.wordCount = this.maxWords;
		}
	}
}
