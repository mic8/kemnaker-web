import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { first, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AuthStore } from '@kemnaker/auth/domains/store';

@Injectable()
export class GuestGuard implements CanActivate {
    public constructor(private authStore: AuthStore, private router: Router) {}

    public canActivate(): Observable<boolean> {
        return this.authStore.isAuthenticated().pipe(
            first(),
            switchMap((authenticated: boolean) => {
                if (authenticated) {
                    this.router.navigate(['/']);
                }

                return of(!authenticated);
            }),
        );
    }
}
