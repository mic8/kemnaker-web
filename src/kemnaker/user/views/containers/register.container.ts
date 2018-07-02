import {Component} from '@angular/core';
import {RegisterFormFactory} from '@kemnaker/user/factories/register-form.factory';
import {Form, FormValue} from '@ubud/form';
import {Observable} from 'rxjs/Observable';
import {UserStore} from '@kemnaker/user/domains/store';
import {Registration} from '@kemnaker/user/domains/models/registration';
import {RegisterUser} from '@kemnaker/user/domains/messages/commands/register-user';

@Component({
    selector: 'kemnaker-register-container',
    template: `
        <kemnaker-register-form #registerForm
                                [form]="form"
                                (submitted)="onSubmit($event)"
                                (valueChanges)="readyForSubmit = 'VALID' === $event.status"></kemnaker-register-form>
        <button (click)="registerForm.submit()"
                [disabled]="!readyForSubmit || (loading$ | async)"
                class="btn btn-primary">
            <ng-container *ngIf="loading$ | async; else buttonLabel">
                <ubud-loader-component></ubud-loader-component>
            </ng-container>
            <ng-template #buttonLabel>Daftar Sekarang</ng-template>
        </button>
    `,
    providers: [RegisterFormFactory],
})
export class RegisterContainer {
    public form: Form;
    public loading$: Observable<boolean>;
    public readyForSubmit: boolean = false;

    public constructor(private formFactory: RegisterFormFactory, private userStore: UserStore) {
        this.form = this.formFactory.create();
        this.loading$ = this.userStore.loading();
    }

    public onSubmit(registration: FormValue<Registration>): void {
        if ('VALID' === registration.status) {
            this.userStore.dispatch(new RegisterUser({ registration: registration.data }));
        }
    }
}
