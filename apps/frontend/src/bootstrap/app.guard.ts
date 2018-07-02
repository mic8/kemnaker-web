import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';
import { AuthStore } from '@kemnaker/auth/domains/store';

@Injectable()
export class AppGuard implements CanActivate {
    public constructor(private router: Router, private store: AuthStore) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.getAuthenticatedUser().pipe(
            first(),
            map(user => {
                if (!user) {
                    this.router.navigate(['/auth/login']);
                } else {
                    return true;
                }

                return false;
            }),
        );
    }
}
