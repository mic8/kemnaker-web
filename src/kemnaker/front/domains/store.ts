import {Injectable} from '@angular/core';
import {Store} from '@ubud/ngrx';
import {createFeatureSelector} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {FrontState} from '@kemnaker/front/domains/state';
import {News} from '@kemnaker/news/domains/models/news';

@Injectable()
export class FrontStore extends Store<FrontState> {
    public loading(): Observable<boolean> {
        return this.select((state: FrontState) => state.ui.loading);
    }

    public getErrorMessages(): Observable<string> {
        return this.select((state: FrontState) => state.ui.errorMessages);
    }

    public getNews(): Observable<News[]> {
        return this.select((state: FrontState) => state.list.news);
    }

    protected selectState(): (state: any) => any {
        return createFeatureSelector('front');
    }
}
