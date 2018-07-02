import {UserState} from '@kemnaker/user/domains/state';
import {createReducer, Message} from '@ubud/ngrx';
import {RegisterUser} from '@kemnaker/user/domains/messages/commands/register-user';
import {UserRegistrationFailure} from '@kemnaker/user/domains/messages/events/user-registration-failure';
import {UserRegistered} from '@kemnaker/user/domains/messages/events/user-registered';

const INITIAL_STATE: UserState = {
    ui: {
        loading: false,
        errorMessages: '',
    },
    registration: null,
    user: null,
};

const reducer = createReducer<UserState>([
    RegisterUser,
    UserRegistrationFailure,
    UserRegistered,
]);

export function userReducer(state: UserState = INITIAL_STATE, action: Message<UserState>): UserState {
    return reducer(state, action);
}
