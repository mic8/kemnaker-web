import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '@kemnaker/auth/domains/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticateEffect } from '@kemnaker/auth/domains/effects/authenticate.effect';
import { AuthService } from '@kemnaker/auth/domains/services/auth.service';
import { UbudStorageModule } from '@ubud/storage';
import { AuthStore } from '@kemnaker/auth/domains/store';
import { SignOutEffect } from '@kemnaker/auth/domains/effects/sign-out.effect';

@NgModule({
    imports: [
        UbudStorageModule,
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthenticateEffect, SignOutEffect]),
    ],
    providers: [AuthService, AuthStore],
})
export class KemnakerAuthDomainModule {}
