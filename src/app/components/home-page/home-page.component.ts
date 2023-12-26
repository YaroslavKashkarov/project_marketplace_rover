import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from "../register/register.component";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, HeaderComponent, RegisterComponent, RouterModule]
})
export class HomePageComponent {
  registerMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  registerToogle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
