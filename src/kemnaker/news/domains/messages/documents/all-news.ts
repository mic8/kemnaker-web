import {messageFactory} from '@ubud/ngrx';
import {NewsState} from '@kemnaker/news/domains/state';
import {News} from '@kemnaker/news/domains/models/news';

export class AllNews extends messageFactory('ALL_NEWS')<NewsState> {
    public news: News[];

    public handle(state: NewsState): NewsState {
        return { ...state, list: { ...state.list, news: this.news } };
    }
}
