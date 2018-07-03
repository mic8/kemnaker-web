import {messageFactory} from '@ubud/ngrx';
import {FrontState} from '@kemnaker/front/domains/state';
import {News} from '@kemnaker/news/domains/models/news';

export class FeatureNews extends messageFactory('FEATURE_NEWS')<FrontState> {
    public news: News[];

    public handle(state: FrontState): FrontState {
        return { ...state, list: { ...state.list, news: this.news } };
    }
}
