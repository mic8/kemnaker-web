import { Credential } from '@kemnaker/auth/domains/models/credential';
import { AuthState } from '@kemnaker/auth/domains/state';
import { messageFactory } from '@ubud/ngrx';

export class Authenticate extends messageFactory('AUTHENTICATE')<AuthState> {
    public credential: Credential;

    public handle(state: AuthState): AuthState {
        return { ...state, authenticating: true, credential: this.credential };
    }
}
