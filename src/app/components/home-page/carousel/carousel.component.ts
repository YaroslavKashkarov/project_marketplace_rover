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
  selectedIndex: number = 0;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 3000; // Default of 3 seconds

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

// Changes slide in every 3 seconds
  autoSlideImages(): void {
    setInterval((): void => {
      this.onNextClick();
    }, this.slideInterval);
  }

// sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
