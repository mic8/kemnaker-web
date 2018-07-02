import {messageFactory} from '@ubud/ngrx';
import {UserState} from '@kemnaker/user/domains/state';

export class UserRegistrationFailure extends messageFactory('USER_REGISTRATION_FAILURE')<UserState> {
    public message: string;

    public handle(state: UserState): UserState {
        return { ...state, ui: { ...state.ui, loading: false, errorMessages: this.message }, user: null };
    }
}
