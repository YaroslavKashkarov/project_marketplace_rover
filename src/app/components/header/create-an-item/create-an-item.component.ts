import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DollarPrefixDirective } from './directive/dollar-prefix.directive';

@Component({
	selector: 'app-create-an-item',
	standalone: true,
	imports: [CommonModule, FormsModule, DollarPrefixDirective],
	templateUrl: './create-an-item.component.html',
	styleUrl: './create-an-item.component.scss',
})
export class CreateAnItemComponent {
	@ViewChild('addInput', { static: false }) addInput: ElementRef;
	@ViewChild('photoInput', { static: false }) photoInput: ElementRef;

	photos: (string | null)[] = [null, null, null];
	setIndex: number | null;
	inputText: string = '';
	maxWords: number = 1000;
	wordCount: number = 1;

	onFileInputClick(index: number | null): void {
		if (index === null) {
			this.addInput.nativeElement.click();
		} else {
			this.setIndex = index;
			this.photoInput.nativeElement.click();
		}
	}

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			Array.from(input.files).forEach(file => this.readFile(file));
		}
		input.value = '';
	}

	private readFile(file: File): void {
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				if (this.setIndex !== null && this.setIndex !== undefined) {
					this.photos[this.setIndex] = reader.result;
					this.setIndex = null;
				} else {
					this.photos.unshift(reader.result);
				}
			}
		};
		reader.readAsDataURL(file);
	}

	deletePhoto(index: number | null): void {
		if (index === 0 && this.photos.length > 3) {
			this.photos.shift();
		} else if (index !== null && index !== undefined) {
			this.photos[index] = null;
		  }
	}

	countWords(): void {
		this.wordCount = this.inputText.length;
		if (this.wordCount > this.maxWords) {
			this.inputText = this.inputText.substring(0, this.maxWords);
			this.wordCount = this.maxWords;
		}
	}
}
