import {Injectable} from '@angular/core';
import {Effects} from '@ubud/ngrx';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {FrontStore} from '@kemnaker/front/domains/store';
import {NewsService} from '@kemnaker/news/domains/services/news.service';
import {LoadingFeatureNews} from '@kemnaker/front/domains/messages/commands/loading-feature-news';
import {catchError, switchMap} from 'rxjs/operators';
import {News} from '@kemnaker/news/domains/models/news';
import {FeatureNewsLoaded} from '@kemnaker/front/domains/messages/events/feature-news-loaded';
import {FeatureNews} from '@kemnaker/front/domains/messages/documents/feature-news';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {FeatureNewsLoadingFailure} from '@kemnaker/front/domains/messages/events/feature-news-loading-failure';

@Injectable()
export class FrontEffect extends Effects {
    @Effect()
    public featureNews$: Observable<Action> = this.handleNavigation(
        '',
        ({ params }) => {
            this.frontStore.dispatch(new LoadingFeatureNews());

            return this.newsService.getFeatureNews()
                .pipe(
                    switchMap((news: News[]) => {
                        return [new FeatureNewsLoaded(), new FeatureNews({ news })];
                    }),
                    catchError((e: HttpErrorResponse) => of(new FeatureNewsLoadingFailure({ message: e.error.message }))),
                );
        },
    );

    public constructor(
        actions$: Actions,
        private frontStore: FrontStore,
        private newsService: NewsService,
    ) {
        super(actions$);
    }
}
