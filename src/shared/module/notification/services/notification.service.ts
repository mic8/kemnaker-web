import { EventEmitter, Injectable } from '@angular/core';
import { Notification } from '../model/notification';

@Injectable()
export class NotificationService {
    public notification: EventEmitter<Notification>;

    public constructor() {
        this.notification = new EventEmitter<Notification>();
    }

    public add(notification: Notification): void {
        this.notification.emit(notification);
    }
}
