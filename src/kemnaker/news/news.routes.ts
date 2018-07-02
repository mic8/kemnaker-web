import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NewsPage} from '@kemnaker/news/views/pages/news.page';
import {AllNewsPage} from '@kemnaker/news/views/pages/all-news.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: NewsPage,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'all',
                    },
                    {
                        path: 'all',
                        component: AllNewsPage,
                    },
                ],
            },
        ],
    },
];

export const NEWS_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
