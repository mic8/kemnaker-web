import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { LoginRule } from '@kemnaker/auth/rules/login.rule';
import { Form, FormFactory } from '@ubud/form';

@Injectable()
export class LoginFormFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {}

    public create(): Form {
        const loginRule = new LoginRule();

        return {
            formGroup: this.fb.group(loginRule.getFormControls()),
            rules: [loginRule],
        };
    }
}
