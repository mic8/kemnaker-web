import {Injectable} from '@angular/core';
import {Effects} from '@ubud/ngrx';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {NewsStore} from '@kemnaker/news/domains/store';
import {NewsService} from '@kemnaker/news/domains/services/news.service';
import {switchMap} from 'rxjs/operators';
import {AllNews} from '@kemnaker/news/domains/messages/documents/all-news';
import {LoadingNews} from '@kemnaker/news/domains/messages/commands/loading-news';
import {NewsLoaded} from '@kemnaker/news/domains/messages/events/news-loaded';

@Injectable()
export class NewsEffect extends Effects {
    @Effect()
    public allNews$: Observable<Action> = this.handleNavigation(
        'news/all',
        ({ params }) => {
            this.newsStore.dispatch(new LoadingNews());

            return this.newsService.getDummyNews()
                .pipe(
                    switchMap(news => {
                        return [new NewsLoaded(), new AllNews({ news })];
                    }),
                );
        },
    );

    public constructor(
        actions$: Actions,
        private newsStore: NewsStore,
        private newsService: NewsService,
    ) {
        super(actions$);
    }
}
