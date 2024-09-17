import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeaderComponent } from '../home-page/header/header.component';
// import { NavbarComponent } from '../home-page/main/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

// import { FooterComponent } from '../home-page/footer/footer.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {}
