import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {NewsEffect} from '@kemnaker/news/domains/effects/news.effect';
import {StoreModule} from '@ngrx/store';
import {newsReducer} from '@kemnaker/news/domains/reducer';
import {NewsStore} from '@kemnaker/news/domains/store';
import {NewsService} from '@kemnaker/news/domains/services/news.service';

@NgModule({
    imports: [StoreModule.forFeature('news', newsReducer), EffectsModule.forFeature([NewsEffect])],
    providers: [NewsStore, NewsService],
})
export class KemnakerNewsDomainModule {}
