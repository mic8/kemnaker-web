import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {WorkUnitPage} from '@kemnaker/unit/views/pages/work-unit.page';
import {SecretariatGeneralPage} from '@kemnaker/unit/views/pages/secretariat-general.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: WorkUnitPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'secretariat',
                    },
                    {
                        path: 'secretariat',
                        component: SecretariatGeneralPage,
                    },
                ],
            },
        ],
    },
];

export const UNIT_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
