import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsPage} from '@kemnaker/news/views/pages/news.page';
import {AllNewsPage} from '@kemnaker/news/views/pages/all-news.page';
import {PopularNewsContainer} from '@kemnaker/news/views/containers/popular-news.container';
import {NewestNewsContainer} from '@kemnaker/news/views/containers/newest-news.container';
import {NewsGridComponent} from '@kemnaker/news/views/components/news-grid.component';
import {UbudLoaderModule} from '@ubud/loader';

const COMPONENTS: any[] = [NewsGridComponent];

const CONTAINERS: any[] = [PopularNewsContainer, NewestNewsContainer];

const PAGES: any[] = [NewsPage, AllNewsPage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule, UbudLoaderModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...OTHER_MODULES, ...KENDO_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerNewsViewModule {}
