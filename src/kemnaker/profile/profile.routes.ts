import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from '@kemnaker/auth/guards/authenticated.guard';
import {ModuleWithProviders} from '@angular/core';
import {ProfilePage} from '@kemnaker/profile/views/pages/profile.page';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [AuthenticatedGuard],
        children: [
            {
                path: '',
                component: ProfilePage,
            },
        ],
    },
];

export const PROFILE_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
