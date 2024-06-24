import { AbstractControl } from "@angular/forms";

export class ValidationHelper {
    public static removeErrors(keys: string[], control: AbstractControl) {
        if (!control || !keys || keys.length === 0) {
            return;
        }

        const remainingErrors = keys.reduce((errors, key) => {
            delete errors[key];
            return errors;
        }, { ...control.errors });

        control.setErrors(remainingErrors);

        if (Object.keys(control.errors || {}).length === 0) {
            control.setErrors(null);
        }
    }
    
    
    public static addErrors(errors: { [key: string]: any }, control: AbstractControl) {
        if (!control || !errors) {
            return;
        }

        control.setErrors({ ...control.errors, ...errors });
    }
}