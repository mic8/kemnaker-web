import { AbstractControl, FormControl } from '@angular/forms/src/model';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

export function notMatchValidator(notMatchWith: string): ValidatorFn {
    let a: FormControl;
    let b: FormControl;

    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.parent) {
            return null;
        }

        if (!a) {
            a = <FormControl>control;
            b = <FormControl>control.parent.get(notMatchWith);

            if (!b) {
                throw new Error('notMatchValidator(): other control is not found in parent group');
            }

            b.valueChanges.subscribe(() => {
                a.updateValueAndValidity();
            });
        }

        if (!b) {
            return null;
        }

        if (b.value !== a.value) {
            return null;
        }

        return {
            notMatch: true,
        };
    };
}
