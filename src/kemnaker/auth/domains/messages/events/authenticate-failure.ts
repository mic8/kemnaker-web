import { AuthState } from '@kemnaker/auth/domains/state';
import { messageFactory } from '@ubud/ngrx';

export class AuthenticateFailure extends messageFactory('AUTHENTICATE_FAILURE')<AuthState> {
    public message: string;

    public handle(state: AuthState): AuthState {
        return {
            ...state,
            authenticating: false,
            credential: null,
            signature: null,
        };
    }
}
