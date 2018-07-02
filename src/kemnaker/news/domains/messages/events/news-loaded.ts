import {messageFactory} from '@ubud/ngrx';
import {NewsState} from '@kemnaker/news/domains/state';

export class NewsLoaded extends messageFactory('NEWS_LOADED')<NewsState> {
    public handle(state: NewsState): NewsState {
        return { ...state, ui: { ...state.ui, loading: false } };
    }
}
