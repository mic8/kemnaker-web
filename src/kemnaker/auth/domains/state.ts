import { Credential } from '@kemnaker/auth/domains/models/credential';
import { Signature } from '@kemnaker/auth/domains/models/signature';
import { User } from '@kemnaker/user/domains/models/user';

export interface AuthState {
    authenticating: boolean;
    credential: Credential | null;
    signature: Signature | null;
    authenticatedUser: User | null;
}
