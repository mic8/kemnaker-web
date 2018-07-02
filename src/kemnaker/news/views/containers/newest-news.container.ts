import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {News} from '@kemnaker/news/domains/models/news';
import {NewsStore} from '@kemnaker/news/domains/store';

@Component({
    selector: 'kemnaker-newest-news-container',
    template: `
        <ng-container *ngIf="(loading$ | async) else newsTemplate">
            <div class="row row-content">
                <div class="col-md-12">
                    <div class="text-center">
                        <ubud-loader-component></ubud-loader-component>
                    </div>
                </div>
            </div>
        </ng-container>
        <ng-template #newsTemplate>
            <kemnaker-news-grid-component [news]="news$ | async"></kemnaker-news-grid-component>
        </ng-template>
    `,
})
export class NewestNewsContainer {
    public loading$: Observable<boolean>;
    public news$: Observable<News[]>;

    public constructor(private newsStore: NewsStore) {
        this.loading$ = this.newsStore.loading();
        this.news$ = this.newsStore.getNews();
    }
}
