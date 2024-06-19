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

  roverInfo: any;
  roverPhotos: any;

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite() {
    this.favoriteService.getFavorite().subscribe((response: any) => {
      this.roverInfo = response;
      this.roverPhotos = response[0].photos;
    })
  }

}
