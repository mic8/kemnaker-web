import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {
    public constructor(private authStore: AuthStore, private router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkRoles(route.data['roles'], route.data['fallbackUrl']);
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkRoles(route.data['roles'], route.data['fallbackUrl']);
    }

    private checkRoles(roles?: string[], fallbackUrl: string = ''): Observable<boolean> {
        return this.authStore.getAuthenticatedUser().pipe(
            first(),
            map(user => {
                if (!user) {
                    return false;
                }

                if (roles) {
                    const hasRole = user.roles.some(({ name }) => roles.indexOf(name) !== -1);

                    if (!hasRole) {
                        this.router.navigateByUrl(fallbackUrl);
                    }

                    return hasRole;
                }

                return true;
            }),
        );
    }
}
