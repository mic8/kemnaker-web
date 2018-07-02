import { UUID } from './uuid';

export abstract class UUIDModel<T extends UUIDModel = any> {
    public id: UUID;

    public constructor(data?: Partial<T>) {
        Object.assign(this, data);
        this.id = this.id || new UUID();
    }
}
