import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './views/pages/login.page';
import { GuestGuard } from '@kemnaker/auth/guards/guest.guard';
import { SignOutPage } from '@kemnaker/auth/views/pages/sign-out.page';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login',
            },
            {
                path: 'login',
                canActivate: [GuestGuard],
                component: LoginPage,
            },
            {
                path: 'logout',
                component: SignOutPage,
            },
        ],
    },
];

export const AUTH_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
