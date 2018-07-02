import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { UserStatus } from 'src/kemnaker/user/domains/enums/user-status';
import {UUIDModel} from '@shared/common';
import {Role} from '@kemnaker/user/domains/models/role';

export class User extends UUIDModel<User> {
    public username: string;
    public email: string;
    public name: string;
    public status: UserStatus;

    @Type(forwardRef(() => Date) as any)
    public createdAt: Date;

    @Type(forwardRef(() => Date) as any)
    public updatedAt: Date;

    public roles: Role[];

    public constructor(data?: Partial<User>) {
        super(data);
        Object.assign(this, data);
    }
}
