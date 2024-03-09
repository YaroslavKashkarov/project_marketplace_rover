import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_LABEL } from '../../../data/form-data';
import { TogglePasswordEditing } from '../../../servises/toggle-profile';

@Component({
  selector: 'app-password-editing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-editing.component.html',
  styleUrl: './password-editing.component.scss',
})
export class PasswordEditingComponent {
  label = FORM_LABEL;

  constructor(public togglePasswordEditing: TogglePasswordEditing) {
  }

  closeEditing(): void {
    this.togglePasswordEditing.isPasswordEditingVisible = false;
  }
}
