import { Component } from '@angular/core';
import { FormComponent } from '@ubud/form';
import { Credential } from '@kemnaker/auth/domains/models/credential';

@Component({
    selector: 'kemnaker-login-form',
    templateUrl: './login.form.html',
})
export class LoginForm extends FormComponent<Credential> {}
