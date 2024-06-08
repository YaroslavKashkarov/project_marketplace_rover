import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_LABEL } from '../../../data/form-data';
import { ToggleProfileEditing } from '../../../servises/toggle-profile';


@Component({
  selector: 'app-profile-editing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-editing.component.html',
  styleUrl: './profile-editing.component.scss',
})
export class ProfileEditingComponent {
  label = FORM_LABEL;

  constructor(public toggleProfileEditing: ToggleProfileEditing) {
  }

  closeEditing(): void {
    this.toggleProfileEditing.isProfileEditingVisible = false;

  }
}
