import {messageFactory} from '@ubud/ngrx';
import {UserState} from '@kemnaker/user/domains/state';
import {Registration} from '@kemnaker/user/domains/models/registration';

export class RegisterUser extends messageFactory('REGISTER_USER')<UserState> {
    public registration: Registration;

    public handle(state: UserState): UserState {
        return { ...state, ui: { ...state.ui, loading: true }, registration: { ...state.registration, data: this.registration } };
    }
}
