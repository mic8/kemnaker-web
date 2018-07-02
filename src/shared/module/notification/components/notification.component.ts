import { Component, OnInit } from '@angular/core';
import { Notification } from '../model/notification';
import { NotificationHiddenEvent } from '../event/notification-hidden.event';
import { StoreData } from '../../common/model/store-data';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'backend-notification',
    templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
    public notifications: StoreData<Notification[]>;

    public constructor(private notificationService: NotificationService) {
        this.notifications = new StoreData<Notification[]>([]);
    }

    public ngOnInit(): void {
        this.notificationService.notification.subscribe((notification: Notification) => {
            this.notifications.value = [notification, ...this.notifications.value];

            notification.hidden.subscribe(this.onNotificationHidden.bind(this));
            notification.waitAndHide();
        });
    }

    public hide(notification: Notification): void {
        notification.hide = true;
    }

    public onNotificationHidden(event: NotificationHiddenEvent): void {
        setTimeout(() => {
            if (event.notification.hide) {
                const index = this.notifications.value.indexOf(event.notification);

                if (index >= 0) {
                    const notifications = [...this.notifications.value];

                    notifications.splice(index, 1);

                    this.notifications.value = [...notifications];
                }
            }
        }, 500);
    }
}
