import {FormState} from '@ubud/form';
import {Registration} from '@kemnaker/user/domains/models/registration';
import {User} from '@kemnaker/user/domains/models/user';

export interface UserState {
    ui: {
        loading: boolean;
        errorMessages: string;
    };
    registration: FormState<Registration> | null;
    user: User | null;
}
