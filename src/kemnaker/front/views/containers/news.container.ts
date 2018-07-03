import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {News} from '@kemnaker/news/domains/models/news';
import {FrontStore} from '@kemnaker/front/domains/store';

@Component({
    selector: 'kemnaker-front-news-container',
    template: `
        <div class="row align-items-center">
            <div class="news-header col-12 col-lg-6">
                <h1>Berita Terbaru</h1>
                <p class="description news-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br> Commodi dolorum et maxime minus,
                    obcaecati.
                </p>
            </div>
            <div class="news-more col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center order-3 order-lg-0">
                <a routerLink="/news/all">
                    <button type="submit" class="btn btn-primary">Lihat lebih banyak</button>
                </a>
            </div>
            <kemnaker-news-grid-component [news]="news$ | async"></kemnaker-news-grid-component>
        </div>
    `,
})
export class NewsContainer {
    public news$: Observable<News[]>;

    public constructor(private frontStore: FrontStore) {
        this.news$ = this.frontStore.getNews();
    }
}
