import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditingComponent } from '../profile-editing/profile-editing.component';
import { PasswordEditingComponent } from '../password-editing/password-editing.component';
import { TogglePasswordEditing, ToggleProfileEditing } from '../../../servises/toggle-profile';


@Component({
  providers: [ToggleProfileEditing, TogglePasswordEditing],
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ProfileEditingComponent, PasswordEditingComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(public toggleProfileEditing: ToggleProfileEditing,
              public togglePasswordEditing: TogglePasswordEditing) {
  }
}
