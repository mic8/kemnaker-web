import { AuthState } from '@kemnaker/auth/domains/state';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { messageFactory } from '@ubud/ngrx';

export class Authenticated extends messageFactory('AUTHENTICATED')<AuthState> {
    public signature: Signature;

    public handle(state: AuthState): AuthState {
        return { ...state, credential: null, signature: this.signature };
    }
}
