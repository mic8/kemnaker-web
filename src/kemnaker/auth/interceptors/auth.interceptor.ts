import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { catchError, switchMap, take } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { SignOut } from '@kemnaker/auth/domains/messages/commands/sign-out';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private authStore: AuthStore) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authStore.getAuthSignature().pipe(
            take(1),
            switchMap((signature: Signature | null) => {
                if (!signature) {
                    return next.handle(req);
                }

                return next
                    .handle(
                        req.clone({
                            setHeaders: {
                                Authorization: `${signature.type} ${signature.token}`,
                            },
                        }),
                    )
                    .pipe(
                        catchError((error: HttpErrorResponse) => {
                            if (error.status === 401) {
                                this.authStore.dispatch(new SignOut());
                            }

                            return ErrorObservable.create(error);
                        }),
                    );
            }),
        );
    }
}
