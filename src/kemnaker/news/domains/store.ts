import {Injectable} from '@angular/core';
import {Store} from '@ubud/ngrx';
import {NewsState} from '@kemnaker/news/domains/state';
import {createFeatureSelector} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {News} from '@kemnaker/news/domains/models/news';

@Injectable()
export class NewsStore extends Store<NewsState> {
    public loading(): Observable<boolean> {
        return this.select((state: NewsState) => state.ui.loading);
    }

    public getErrorMessages(): Observable<string> {
        return this.select((state: NewsState) => state.ui.errorMessages);
    }

    public getNews(): Observable<News[]> {
        return this.select((state: NewsState) => state.list.news);
    }

    public all(): Observable<NewsState> {
        return this.select((state: NewsState) => state);
    }

    protected selectState(): (state: any) => any {
        return createFeatureSelector('news');
    }
}
