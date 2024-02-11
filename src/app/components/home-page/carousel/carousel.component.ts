import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

interface carouselTitle {
  imageTitle: string,
  imageTitle2: string
}

interface carouselButton {
  carouselButton: string;
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
  @Input() titles: carouselTitle[] = [];
  @Input() buttons: carouselButton[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 3000;

  selectIndex: number = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval((): void => {
      this.onNextClick();
    }, this.slideInterval);
  }

//sets index of image on dot/indicators click
  selectImage(index: number): void {
    this.selectIndex = index;
  }

  onPrevClick(): void {
    if (this.selectIndex === 0) {
      this.selectIndex = this.images.length - 1;
    } else {
      this.selectIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex = 0;
    } else {
      this.selectIndex++;
    }
  }
}
