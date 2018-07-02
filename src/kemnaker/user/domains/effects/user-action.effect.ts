import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserStore} from '@kemnaker/user/domains/store';
import {UserService} from '@kemnaker/user/domains/services/user.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {RegisterUser} from '@kemnaker/user/domains/messages/commands/register-user';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Registration} from '@kemnaker/user/domains/models/registration';
import {User} from '@kemnaker/user/domains/models/user';
import {UserRegistered} from '@kemnaker/user/domains/messages/events/user-registered';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {UserRegistrationFailure} from '@kemnaker/user/domains/messages/events/user-registration-failure';
import {Router} from '@angular/router';
import {NotificationService} from '@shared/module/notification/services/notification.service';
import {Notification} from '@shared/module/notification/model/notification';
import {Color} from '@shared/enum/ui';

@Injectable()
export class UserActionEffect {
    @Effect()
    public userRegister$: Observable<Action> = this.actions$.pipe(
        ofType(RegisterUser.NAME),
        map(a => <RegisterUser>a),
        map((action: RegisterUser) => action.registration),
        switchMap((registration: Registration) => {
            console.log(registration);
            return this.userService.registerUser(registration).pipe(
                tap((user: User) => {
                    this.notificationService.add(new Notification({
                        message: 'Registrasi user berhasil',
                        color: Color.Success,
                    }));
                    this.router.navigateByUrl('/auth/login');
                }),
                switchMap((user: User) => {
                    return [new UserRegistered({ user })];
                }),
                catchError((e: HttpErrorResponse) => of(new UserRegistrationFailure({ message: e.error.message }))),
            );
        }),
    );

    public constructor(
        private actions$: Actions,
        private userStore: UserStore,
        private userService: UserService,
        private router: Router,
        private notificationService: NotificationService,
    ) {}
}
