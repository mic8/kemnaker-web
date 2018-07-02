import {EnumOption} from '@shared/common';

export enum UserStatus {
    ACTIVE = 'active',
    BLOCKED = 'blocked',
}

export namespace UserStatus {
    export function getArrayValue(): EnumOption<UserStatus>[] {
        return [{ id: UserStatus.ACTIVE, text: 'Active' }, { id: UserStatus.BLOCKED, text: 'Blocked' }];
    }
}
