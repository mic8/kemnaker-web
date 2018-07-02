import { Validators } from '@angular/forms';
import { ErrorMessages, Rule } from '@ubud/form';

export class LoginRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {
            username: {
                required: (params: any) => 'Username tidak boleh kosong.',
            },
            password: {
                required: (params: any) => 'Password tidak boleh kosong.',
            },
        };
    }

    public get username(): Function {
        return Validators.required;
    }

    public get password(): Function {
        return Validators.required;
    }

    public getFormControls(): { [p: string]: any } {
        return {
            username: ['', this.username],
            password: ['', this.password],
        };
    }
}
