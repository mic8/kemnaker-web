import { APP_INITIALIZER, Provider } from '@angular/core';
import { Storage } from '@ubud/storage';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { User } from '@kemnaker/user/domains/models/user';
import { AuthenticatedUser } from '@kemnaker/auth/domains/messages/documents/authenticated-user';
import { Authenticated } from '@kemnaker/auth/domains/messages/events/authenticated';
import { filter, first } from 'rxjs/operators';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { zip } from 'rxjs/observable/zip';

export function useFactory(storage: Storage, store: AuthStore): () => Promise<void> {
    return () =>
        new Promise(async resolve => {
            const user: User = await storage.get<User>('user');
            const signature: Signature = await storage.get<Signature>('auth_signature');

            if (!signature) {
                resolve();
                return;
            }

            store.dispatch(new AuthenticatedUser({ authenticatedUser: user }));
            store.dispatch(new Authenticated({ signature }));

            zip(
                store.getAuthenticatedUser().pipe(
                    filter(u => u === user),
                    first(),
                ),
                store.getAuthSignature().pipe(
                    filter(t => t === signature),
                    first(),
                ),
            ).subscribe(() => resolve());
        });
}

export const Initializer: Provider = {
    useFactory,
    provide: APP_INITIALIZER,
    deps: [Storage, AuthStore],
    multi: true,
};
