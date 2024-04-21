import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function passwordValidator(control: AbstractControl): any {
//   const value: string = control.value;
//
//   if (!/[A-Z]/.test(value)) {
//     console.log({uppercase: true});
//   }
//
//   if (!/[a-z]/.test(value)) {
//     console.log({lowercase: true});
//   }
//
//   if (!/\d/.test(value)) {
//     console.log({digit: true});
//   }
//
//   if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
//     console.log({symbol: true});
//   }
//
//   console.log(null);
// }

// TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log()
export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    if (!/[A-Z]/.test(value)) {
      return {uppercase: true};
    }

    if (!/[a-z]/.test(value)) {
      return {lowercase: true};
    }

    if (!/\d/.test(value)) {
      return {digit: true};
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
      return {symbol: true};
    }

    return null;
  };
  
}
