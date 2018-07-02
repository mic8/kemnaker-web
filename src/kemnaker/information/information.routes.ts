import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AboutPage} from '@kemnaker/information/views/pages/about.page';
import {FaqPage} from '@kemnaker/information/views/pages/faq.page';
import {ContactPage} from '@kemnaker/information/views/pages/contact.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'about',
            },
            {
                path: 'about',
                component: AboutPage,
            },
            {
                path: 'faq',
                component: FaqPage,
            },
            {
                path: 'contact',
                component: ContactPage,
            },
        ],
    },
];

export const INFORMATION_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
