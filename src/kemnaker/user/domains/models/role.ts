import {UUIDModel} from '@shared/common';

export class Role extends UUIDModel<Role> {
    public name: string;
    public label: string;

    public constructor(data?: Partial<Role>) {
        super(data);

        Object.assign(this, data);
    }
}
