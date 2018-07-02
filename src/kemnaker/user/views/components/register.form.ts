import {Component} from '@angular/core';
import {FormComponent} from '@ubud/form';
import {Registration} from '@kemnaker/user/domains/models/registration';

@Component({
    selector: 'kemnaker-register-form',
    templateUrl: './register.form.html',
})
export class RegisterForm extends FormComponent<Registration> {}
