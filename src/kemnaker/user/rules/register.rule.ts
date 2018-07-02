import {ErrorMessages, Rule} from '@ubud/form';
import {Validators} from '@angular/forms';

export class RegisterRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {
            username: {
                required: (params: any) => 'Username tidak boleh kosong.',
            },
            email: {
                required: (params: any) => 'Email tidak boleh kosong.',
                email: (params: any) => 'Format email tidak tepat.',
            },
            name: {
                required: (params: any) => 'Nama tidak boleh kosong.',
            },
            password: {
                required: (params: any) => 'Password tidak boleh kosong',
            },
        };
    }

    public get username(): Function {
        return Validators.required;
    }

    public get email(): Function | null {
        return Validators.compose([Validators.required, Validators.email]);
    }

    public get name(): Function {
        return Validators.required;
    }

    public get password(): Function {
        return Validators.required;
    }

    public getFormControls(): { [p: string]: any } {
        return {
            username: ['', this.username],
            email: ['', this.email],
            name: ['', this.name],
            password: ['', this.password],
        };
    }
}
