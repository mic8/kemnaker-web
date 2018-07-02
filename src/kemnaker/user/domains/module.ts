import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '@kemnaker/user/domains/reducer';
import {UserStore} from '@kemnaker/user/domains/store';
import {UserService} from '@kemnaker/user/domains/services/user.service';
import {EffectsModule} from '@ngrx/effects';
import {UserActionEffect} from '@kemnaker/user/domains/effects/user-action.effect';

@NgModule({
    imports: [
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserActionEffect]),
    ],
    providers: [UserStore, UserService],
})
export class KemnakerUserDomainModule {}
