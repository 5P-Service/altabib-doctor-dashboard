import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value === confirmPassword?.value && password?.value.length > 0) {
        confirmPassword?.setErrors({ notmatched: true })
        return { notmatched: true };
    } else return null;
};
