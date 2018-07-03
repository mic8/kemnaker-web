import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {frontReducer} from '@kemnaker/front/domains/reducer';
import {FrontStore} from '@kemnaker/front/domains/store';
import {NewsService} from '@kemnaker/news/domains/services/news.service';
import {EffectsModule} from '@ngrx/effects';
import {FrontEffect} from '@kemnaker/front/domains/effects/front.effect';

@NgModule({
    imports: [
        StoreModule.forFeature('front', frontReducer),
        EffectsModule.forFeature([FrontEffect]),
    ],
    providers: [FrontStore, NewsService],
})
export class KemnakerFrontDomainModule {}
