import {FrontState} from '@kemnaker/front/domains/state';
import {createReducer, Message} from '@ubud/ngrx';
import {FeatureNews} from '@kemnaker/front/domains/messages/documents/feature-news';
import {LoadingFeatureNews} from '@kemnaker/front/domains/messages/commands/loading-feature-news';
import {FeatureNewsLoaded} from '@kemnaker/front/domains/messages/events/feature-news-loaded';
import {FeatureNewsLoadingFailure} from '@kemnaker/front/domains/messages/events/feature-news-loading-failure';

const INITIAL_STATE: FrontState = {
    ui: {
        loading: false,
        errorMessages: '',
    },
    list: {
        news: [],
    },
};

const reducer = createReducer<FrontState>([FeatureNews, LoadingFeatureNews, FeatureNewsLoaded, FeatureNewsLoadingFailure]);

export function frontReducer(frontState: FrontState = INITIAL_STATE, action: Message<FrontState>): FrontState {
    return reducer(frontState, action);
}
