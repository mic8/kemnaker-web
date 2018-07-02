import { AuthState } from '@kemnaker/auth/domains/state';
import { messageFactory } from '@ubud/ngrx';

export class SignOut extends messageFactory('SIGN_OUT')<AuthState> {
    public handle(state: AuthState): AuthState {
        return { ...state, signature: null, authenticatedUser: null };
    }
}
