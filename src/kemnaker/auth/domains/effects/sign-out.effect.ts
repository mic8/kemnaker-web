import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Storage } from '@ubud/storage';
import { Observable } from 'rxjs/Observable';
import { SignOut } from '@kemnaker/auth/domains/messages/commands/sign-out';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { AuthStore } from '@kemnaker/auth/domains/store';

@Injectable()
export class SignOutEffect {
    @Effect({ dispatch: false })
    public signOut$: Observable<Action> = this.actions$.pipe(
        ofType(SignOut.NAME),
        tap(async () => {
            await Promise.all([this.storage.remove('auth_signature'), this.storage.remove('user')]);
            this.router.navigate(['/']);
        }),
        switchMap(() => of()),
    );

    public constructor(
        private actions$: Actions,
        private storage: Storage,
        private router: Router,
        private store: AuthStore,
    ) {}
}
