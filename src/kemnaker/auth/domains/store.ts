import { Store } from '@ubud/ngrx';
import { AuthState } from '@kemnaker/auth/domains/state';
import { Observable } from 'rxjs/Observable';
import { User } from '@kemnaker/user/domains/models/user';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { createFeatureSelector } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthStore extends Store<AuthState> {
    public isAuthenticating(): Observable<boolean> {
        return this.select((state: AuthState) => state.authenticating);
    }

    public getAuthSignature(): Observable<Signature | null> {
        return this.select((state: AuthState) => state.signature);
    }

    public getAuthenticatedUser(): Observable<User | null> {
        return this.select((state: AuthState) => state.authenticatedUser);
    }

    public isAuthenticated(): Observable<boolean> {
        return this.getAuthSignature().pipe(map(signature => !!signature));
    }

    protected selectState(): (state: any) => any {
        return createFeatureSelector('auth');
    }
}
