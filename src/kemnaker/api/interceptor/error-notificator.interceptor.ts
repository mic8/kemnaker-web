import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {NotificationService} from '@shared/module/notification/services/notification.service';
import {Color} from '@shared/enum/ui';
import {Notification} from '@shared/module/notification/model/notification';

@Injectable()
export class ErrorNotificatorInterceptor implements HttpInterceptor {
    public constructor(private notificationService: NotificationService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError(err => {
                let message = '';

                if (!err.status) {
                    throw err;
                }

                if (err.error instanceof ProgressEvent) {
                    message = err.message;
                } else {
                    message = err.error.message;
                }
                this.notificationService.add(
                    new Notification({
                        message,
                        color: Color.Danger,
                    }),
                );

                throw err;
            }),
        );
    }
}
