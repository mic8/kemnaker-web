import { Color } from '../../../enum/ui';
import { EventEmitter } from '@angular/core';
import { NotificationHiddenEvent } from '../event/notification-hidden.event';

export class Notification {
    public title?: string;
    public message: string;
    public color: Color;
    public hideDelay: number;
    public dismissable: boolean;
    public hidden: EventEmitter<NotificationHiddenEvent>;

    private _hide: boolean = false;

    public constructor(data?: Partial<Notification>) {
        this.hideDelay = 3000;
        this.dismissable = true;
        this.hidden = new EventEmitter<NotificationHiddenEvent>();

        Object.assign(this, data);
    }

    public get hide(): boolean {
        return this._hide;
    }

    public set hide(hide: boolean) {
        this._hide = hide;
        this.hidden.emit({ notification: this });
    }

    public get colorAsString(): string {
        return String(this.color).toString();
    }

    public waitAndHide(): void {
        setTimeout(() => (this.hide = true), this.hideDelay);
    }
}
