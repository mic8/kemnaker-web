import { AuthState } from '@kemnaker/auth/domains/state';
import { User } from '@kemnaker/user/domains/models/user';
import { messageFactory } from '@ubud/ngrx';

export class AuthenticatedUser extends messageFactory('AUTHENTICATED_USER')<AuthState> {
    public authenticatedUser: User | null;

    public handle(state: AuthState): AuthState {
        return { ...state, authenticating: false, authenticatedUser: this.authenticatedUser };
    }
}
