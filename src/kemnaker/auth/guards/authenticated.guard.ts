import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { first, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AuthStore } from '@kemnaker/auth/domains/store';

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
    public constructor(private authStore: AuthStore, private router: Router) {}

    public canActivate(): Observable<boolean> {
        return this.authStore.isAuthenticated().pipe(
            first(),
            switchMap((authenticated: boolean) => {
                if (!authenticated) {
                    this.router.navigate(['/auth/login']);
                }

                return of(authenticated);
            }),
        );
    }

    public canActivateChild(): Observable<boolean> {
        return this.canActivate();
    }
}
