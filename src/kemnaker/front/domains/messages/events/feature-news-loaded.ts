import {messageFactory} from '@ubud/ngrx';
import {FrontState} from '@kemnaker/front/domains/state';

export class FeatureNewsLoaded extends messageFactory('FEATURE_NEWS_LOADED')<FrontState> {
    public handle(state: FrontState): FrontState {
        return { ...state, ui: { ...state.ui, loading: false } };
    }
}
