import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditingComponent } from '../profile-editing/profile-editing.component';
import { PasswordEditingComponent } from '../password-editing/password-editing.component';
import { TogglePasswordEditing, ToggleProfileEditing } from '../../../servises/toggle-profile';
import { ProfileService } from '../../services/profile.service';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  providers: [ToggleProfileEditing, TogglePasswordEditing],
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ProfileEditingComponent, PasswordEditingComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  constructor(public toggleProfileEditing: ToggleProfileEditing,
              public togglePasswordEditing: TogglePasswordEditing,
              private profileService: ProfileService,
              public authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  public openProfile(userToken: string): void {
    this.profileService.getUserProfile(userToken)
      .subscribe(
        (userData) => {
          console.log('Данные пользователя получены:', userData);
        },
        (error) => {
          console.error('Ошибка при получении данных пользователя:', error);
        },
      );
  }


}
