import {Injectable} from '@angular/core';
import {Store} from '@ubud/ngrx';
import {UserState} from '@kemnaker/user/domains/state';
import {createFeatureSelector} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {FormState} from '@ubud/form';
import {Registration} from '@kemnaker/user/domains/models/registration';

@Injectable()
export class UserStore extends Store<UserState> {
    public loading(): Observable<boolean> {
        return this.select((state: UserState) => state.ui.loading);
    }

    public getErrorMessages(): Observable<string> {
        return this.select((state: UserState) => state.ui.errorMessages);
    }

    public getRegistration(): Observable<FormState<Registration> | null> {
        return this.select((state: UserState) => state.registration);
    }

    protected selectState(): (state: any) => any {
        return createFeatureSelector('user');
    }
}
