import {messageFactory} from '@ubud/ngrx';
import {UserState} from '@kemnaker/user/domains/state';
import {User} from '@kemnaker/user/domains/models/user';

export class UserRegistered extends messageFactory('USER_REGISTERED')<UserState> {
    public user: User;

    public handle(state: UserState): UserState {
        return { ...state, ui: { ...state.ui, loading: false }, registration: null, user: this.user };
    }
}
