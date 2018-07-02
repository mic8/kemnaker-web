import {NgModule} from '@angular/core';
import {KemnakerNewsDomainModule} from '@kemnaker/news/domains/module';
import {KemnakerNewsViewModule} from '@kemnaker/news/views/module';
import {NEWS_ROUTING} from '@kemnaker/news/news.routes';

@NgModule({
    imports: [KemnakerNewsDomainModule, KemnakerNewsViewModule, NEWS_ROUTING],
})
export class KemnakerNewsModule {}
