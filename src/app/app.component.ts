import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {CreateAnItemComponent} from './components/create-an-item/create-an-item.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HeaderComponent } from './components/home-page/header/header.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl, NgControl,ControlValueAccessor,ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent, 
    ReactiveFormsModule,
    FooterComponent,
    CreateAnItemComponent, 
    FavoriteComponent, 
    HomePageComponent, 
    RegisterComponent,
    UserProfileComponent,
    EditProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'app_marketplace_rover';
}


