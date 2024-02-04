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

  selectedIndex = 0;

  ngOnInit(): void {
  }
}
