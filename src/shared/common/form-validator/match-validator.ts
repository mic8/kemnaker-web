import { AbstractControl, FormControl } from '@angular/forms/src/model';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

export function matchValidator(matchWith: string): ValidatorFn {
    let a: FormControl;
    let b: FormControl;

    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.parent) {
            return null;
        }

        if (!a) {
            a = <FormControl>control;
            b = <FormControl>control.parent.get(matchWith);

            if (!b) {
                throw new Error('matchValidator(): other control is not found in parent group');
            }

            b.valueChanges.subscribe(() => {
                a.updateValueAndValidity();
            });
        }

        if (!b) {
            return null;
        }

        if (b.value !== a.value) {
            return {
                match: true,
            };
        }

        return null;
    };
}
