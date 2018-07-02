import {NewsState} from '@kemnaker/news/domains/state';
import {createReducer, Message} from '@ubud/ngrx';
import {AllNews} from '@kemnaker/news/domains/messages/documents/all-news';

const INITIAL_STATE: NewsState = {
    ui: {
        loading: false,
        errorMessages: '',
    },
    list: {
        news: [],
    },
};

const reducer = createReducer<NewsState>([
    AllNews,
]);

export function newsReducer(state: NewsState = INITIAL_STATE, action: Message<NewsState>): NewsState {
    return reducer(state, action);
}
