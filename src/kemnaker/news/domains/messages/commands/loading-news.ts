import {messageFactory} from '@ubud/ngrx';
import {NewsState} from '@kemnaker/news/domains/state';

export class LoadingNews extends messageFactory('LOADING_NEWS')<NewsState> {
    public handle(state: NewsState): NewsState {
        return { ...state, ui: { ...state.ui, loading: true } };
    }
}
