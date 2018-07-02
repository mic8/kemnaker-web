/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DefaultTemplate} from '../template/default/components/default.template';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const routes: Routes = [
    {
        path: '',
        component: DefaultTemplate,
        children: [
            {
                path: '',
                loadChildren: '../../../../src/kemnaker/front/front.module#KemnakerFrontModule',
            },
            {
                path: 'news',
                loadChildren: '../../../../src/kemnaker/news/news.module#KemnakerNewsModule',
            },
            {
                path: 'unit',
                loadChildren: '../../../../src/kemnaker/unit/unit.module#KemnakerUnitModule',
            },
            {
                path: 'information',
                loadChildren: '../../../../src/kemnaker/information/information.module#KemnakerInformationModule',
            },
            {
                path: 'profile',
                loadChildren: '../../../../src/kemnaker/profile/profile.module#KemnakerProfileModule',
            },
        ],
    },
    {
        path: 'user',
        loadChildren: '../../../../src/kemnaker/user/user.module#KemnakerUserModule',
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
