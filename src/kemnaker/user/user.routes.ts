import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GuestGuard} from '@kemnaker/auth/guards/guest.guard';
import {RegisterPage} from '@kemnaker/user/views/pages/register.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'register',
            },
            {
                path: 'register',
                component: RegisterPage,
                canActivate: [GuestGuard],
            },
        ],
    },
];

export const USER_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
