import { Component, OnInit } from '@angular/core';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { SignOut } from '@kemnaker/auth/domains/messages/commands/sign-out';

@Component({
    selector: 'kemnaker-sign-out-page',
    template: '',
})
export class SignOutPage implements OnInit {
    public constructor(private store: AuthStore) {}

    public ngOnInit(): void {
        this.store.dispatch(new SignOut());
    }
}
