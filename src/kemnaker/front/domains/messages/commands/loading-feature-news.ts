import {messageFactory} from '@ubud/ngrx';
import {FrontState} from '@kemnaker/front/domains/state';

export class LoadingFeatureNews extends messageFactory('LOADING_FEATURE_NEWS')<FrontState> {
    public handle(state: FrontState): FrontState {
        return { ...state, ui: { ...state.ui, loading: true } };
    }
}
