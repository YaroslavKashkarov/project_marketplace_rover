import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

interface carouselImage {
	imageSrc: string;
	imageAlt: string;
}

@Component({
	selector: 'app-carousel',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss',
})

export class CarouselComponent implements OnInit {
	@Input() images: carouselImage[] = [];
	@Input() indicators: boolean = true;
	@Input() controls: boolean = true;
	@Input() autoSlide: boolean = true;
	@Input() slideInterval: number = 3000;

	selectedIndex: number = 0;

	ngOnInit(): void {
		if (this.autoSlide) {
			this.autoSlideImages();
		}
	}

	autoSlideImages(): void {
		setTimeout( this.onNextClick, this.slideInterval );
	}

	selectImage(index: number): void {
		this.selectedIndex = index;
	}

	onNextClick(): void {
		if (this.selectedIndex === this.images.length - 1) {
			this.selectedIndex = 0;
			console.log(this.selectedIndex);
		} else {
			this.selectedIndex++;
		}
	}

	onPrevClick(): void {
		if (this.selectedIndex === 0) {
			this.selectedIndex = this.images.length - 1;
		} else {
			this.selectedIndex--;
		}
	}
}
