import { Component } from '@angular/core';
import { LoginFormFactory } from '@kemnaker/auth/factories/login-form.factory';
import { Form, FormValue } from '@ubud/form';
import { Credential } from '@kemnaker/auth/domains/models/credential';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { Authenticate } from '@kemnaker/auth/domains/messages/commands/authenticate';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'kemnaker-login-container',
    template: `
        <kemnaker-login-form #loginForm
                            [form]="form"
                            (valueChanges)="readyForSubmit = 'VALID' === $event.status"
                            (submitted)="onSubmit($event)">
        </kemnaker-login-form>

        <button (click)="loginForm.submit()"
                [disabled]="!readyForSubmit || (loading$ | async)"
                class="btn btn-primary">
            <ng-container *ngIf="loading$ | async; else buttonLabel">
                <ubud-loader-component></ubud-loader-component>
            </ng-container>
            <ng-template #buttonLabel>Masuk Sekarang</ng-template>
        </button>
        <div class="text-center">
            <a href="#">Lupa Password?</a>
        </div>
    `,
    providers: [LoginFormFactory],
})
export class LoginContainer {
    public form: Form;
    public readyForSubmit: boolean = false;
    public loading$: Observable<boolean>;

    public constructor(formFactory: LoginFormFactory, private store: AuthStore) {
        this.form = formFactory.create();

        this.loading$ = this.store.isAuthenticating();
    }

    public onSubmit(auth: FormValue<Credential>): void {
        if ('VALID' === auth.status) {
            this.store.dispatch(new Authenticate({ credential: auth.data }));
        }
    }
}
