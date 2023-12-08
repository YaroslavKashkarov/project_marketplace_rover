import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RegisterComponent]
})
export class HomeComponent {
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
