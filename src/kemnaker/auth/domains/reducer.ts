import { AuthState } from '@kemnaker/auth/domains/state';
import { createReducer, Message } from '@ubud/ngrx';
import { Authenticate } from '@kemnaker/auth/domains/messages/commands/authenticate';
import { SignOut } from '@kemnaker/auth/domains/messages/commands/sign-out';
import { AuthenticatedUser } from '@kemnaker/auth/domains/messages/documents/authenticated-user';
import { AuthenticateFailure } from '@kemnaker/auth/domains/messages/events/authenticate-failure';
import { Authenticated } from '@kemnaker/auth/domains/messages/events/authenticated';

const INITIAL_STATE: AuthState = {
    authenticating: false,
    credential: null,
    signature: null,
    authenticatedUser: null,
};

const reducer = createReducer<AuthState>([Authenticate, SignOut, AuthenticatedUser, AuthenticateFailure, Authenticated]);

export function authReducer(state: AuthState = INITIAL_STATE, action: Message<AuthState>): AuthState {
    return reducer(state, action);
}
