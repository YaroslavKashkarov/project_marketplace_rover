import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidationHelper } from './validationHelper.utils';

export class CustomValidators {
  static validateConfirmPassword(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('password') as AbstractControl;
    const confirmPasswordControl = control.get('confirmPassword') as AbstractControl;

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      ValidationHelper.addErrors(
        {
          invalidConfirmPassword: true,
        },
        confirmPasswordControl,
      );
    } else {
      ValidationHelper.removeErrors(['invalidConfirmPassword'], confirmPasswordControl);
    }

    return null;
  }

  static validateNewConfirmPassword(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('newPassword') as AbstractControl;
    const confirmPasswordControl = control.get('confirmPassword') as AbstractControl;

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      ValidationHelper.addErrors(
        {
          invalidConfirmPassword: true,
        },
        confirmPasswordControl,
      );
    } else {
      ValidationHelper.removeErrors(['invalidConfirmPassword'], confirmPasswordControl);
    }

    return null;
  }
}
