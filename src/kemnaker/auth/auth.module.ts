import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KemnakerApiModule } from '@kemnaker/api/api.module';
import { KemnakerAuthDomainModule } from '@kemnaker/auth/domains/module';
import { KemnakerAuthViewModule } from '@kemnaker/auth/views/module';
import { GuestGuard } from '@kemnaker/auth/guards/guest.guard';
import { AuthenticatedGuard } from '@kemnaker/auth/guards/authenticated.guard';
import { AUTH_ROUTING } from '@kemnaker/auth/auth.routes';
import { RoleGuard } from '@kemnaker/auth/guards/role.guard';

@NgModule({
    imports: [RouterModule, KemnakerAuthDomainModule, KemnakerAuthViewModule, KemnakerApiModule, AUTH_ROUTING],
    providers: [GuestGuard, AuthenticatedGuard, RoleGuard],
})
export class KemnakerAuthModule {}
