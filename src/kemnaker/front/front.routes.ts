import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {IndexPage} from '@kemnaker/front/views/pages/index.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: IndexPage,
            },
        ],
    },
];

export const FRONT_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
