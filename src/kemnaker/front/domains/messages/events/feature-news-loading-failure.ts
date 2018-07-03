import {messageFactory} from '@ubud/ngrx';
import {FrontState} from '@kemnaker/front/domains/state';

export class FeatureNewsLoadingFailure extends messageFactory('FEATURE_NEWS_LOADING_FAILURE')<FrontState> {
    public message: string;

    public handle(state: FrontState): FrontState {
        return { ...state, ui: { ...state.ui, loading: false, errorMessages: this.message }, list: { ...state.list, news: [] } };
    }
}
