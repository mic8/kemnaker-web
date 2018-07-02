import { Injectable } from '@angular/core';
import { AuthService } from '@kemnaker/auth/domains/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Authenticate } from '@kemnaker/auth/domains/messages/commands/authenticate';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Credential } from '@kemnaker/auth/domains/models/credential';
import { Authenticated } from '@kemnaker/auth/domains/messages/events/authenticated';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticateFailure } from '@kemnaker/auth/domains/messages/events/authenticate-failure';
import { of } from 'rxjs/observable/of';
import { Storage } from '@ubud/storage';
import { AuthenticatedUser } from '@kemnaker/auth/domains/messages/documents/authenticated-user';
import { User } from '@kemnaker/user/domains/models/user';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthenticateEffect {
    @Effect()
    public authenticate$: Observable<Action> = this.actions$.pipe(
        ofType(Authenticate.NAME),
        map(a => <Authenticate>a),
        map((action: Authenticate) => action.credential),
        switchMap((credential: Credential) => {
            return this.authService.authenticate(credential).pipe(
                tap((signature: Signature) => {
                    this.storage.set('auth_signature', signature);
                    this.router.navigateByUrl('/');
                }),
                switchMap((signature: Signature) => of(new Authenticated({ signature }))),
                catchError((e: HttpErrorResponse) => of(new AuthenticateFailure({ message: e.error.message }))),
            );
        }),
    );

    @Effect()
    public fetchAuthenticatedUser$: Observable<Action> = this.actions$.pipe(
        ofType(Authenticated.NAME),
        switchMap(() => {
            return this.authService.fetchAuthenticatedUser().pipe(
                tap(user => {
                    this.storage.set('user', user);
                }),
                catchError(() =>
                    fromPromise(
                        this.storage.get('user').then(u => {
                            if (!u) {
                                throw new Error('user not found');
                            }
                            return new User(u);
                        }),
                    ),
                ),
            );
        }),
        switchMap((authenticatedUser: User) => {
            return [new AuthenticatedUser({ authenticatedUser })];
        }),
        catchError((e: HttpErrorResponse) => of(new AuthenticateFailure({ message: e.error.message }))),
    );

    /*@Effect()
    public authenticateFailure$: Observable<Action> = this.actions$.pipe(
        ofType(AuthenticateFailure.NAME),
        tap(() => {
            this.storage.remove('user');
            this.storage.remove('auth_signature');
        }),
    );*/

    public constructor(
        private actions$: Actions,
        private authService: AuthService,
        private storage: Storage,
        private router: Router,
    ) {}
}
