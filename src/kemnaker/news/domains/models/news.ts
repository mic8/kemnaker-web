import {UUIDModel} from '@shared/common';
import {Type} from 'class-transformer';
import {forwardRef} from '@angular/core';

export class News extends UUIDModel<News> {
    public title: string;
    public content: string;
    public author: string;

    @Type(forwardRef(() => Date) as any)
    public date: Date;

    public constructor(data?: Partial<News>) {
        super(data);

        Object.assign(this, data);
    }
}
