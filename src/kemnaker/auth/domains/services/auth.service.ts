import { Injectable } from '@angular/core';
import { KemnakerApiClient } from '@kemnaker/api/client';
import { Observable } from 'rxjs/Observable';
import { Credential } from '@kemnaker/auth/domains/models/credential';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { User } from '@kemnaker/user/domains/models/user';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { Storage } from '@ubud/storage';
import { ResponseTransformer } from '@kemnaker/api/transformer/response';

@Injectable()
export class AuthService {
    public constructor(private api: KemnakerApiClient, private storage: Storage, private store: AuthStore) {}

    public authenticate(credential: Credential): Observable<Signature> {
        return this.api.post<any>('auth', credential).pipe(
            ResponseTransformer.toData(),
            ResponseTransformer.toSingleClass(Signature),
        );
    }

    public fetchAuthenticatedUser(): Observable<User> {
        return this.api.get<any>('users/me').pipe(
            ResponseTransformer.toData(),
            ResponseTransformer.toSingleClass(User),
        );
    }
}
