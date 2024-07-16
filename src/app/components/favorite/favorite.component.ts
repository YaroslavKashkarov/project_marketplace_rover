import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorite.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {

  constructor(private favoriteService: FavoritesService) { }

  isFavorite: boolean = true;
  roverInfo: any;
  roverPhotos: any;

  message: string = '';

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite() {
    this.favoriteService.getFavorite().subscribe((response: any) => {
      this.roverInfo = response;
      this.roverPhotos = response[0].photos;
    })
  }

  removeFavorite(productId: number) {
    this.favoriteService.removeFavorite(productId).subscribe((response: any) => {
      if (!response) {
        this.isFavorite = false;
        this.message = 'Product successfully removed from favorites';

        console.log(this.message);
      }
    })
  }

  addFavorite(productId: number) {
    this.favoriteService.addFavorite(productId).subscribe((response: any) => {
      if (response) {
        this.isFavorite = true;
        this.message = 'Products successfully added to favorites'

        console.log(this.message);
      }
    })
  }
}
