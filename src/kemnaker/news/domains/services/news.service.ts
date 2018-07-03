import {Injectable} from '@angular/core';
import {KemnakerApiClient} from '@kemnaker/api/client';
import {Observable} from 'rxjs/Observable';
import {News} from '@kemnaker/news/domains/models/news';
import {ResponseTransformer} from '@kemnaker/api/transformer/response';

@Injectable()
export class NewsService {
    public constructor(private api: KemnakerApiClient) {}

    public getFeatureNews(): Observable<News[]> {
        return this.api.get(`feature-news`)
            .pipe(
                ResponseTransformer.toData(), ResponseTransformer.toArrayClass(News),
            );
    }

    public getDummyNews(): Observable<News[]> {
        return this.api.get(`news`)
            .pipe(
                ResponseTransformer.toData(), ResponseTransformer.toArrayClass(News),
            );
    }
}
