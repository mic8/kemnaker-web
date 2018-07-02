import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './components/notification.component';
import { NotificationService } from './services/notification.service';

const COMPONENTS = [NotificationComponent];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class NotificationModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationModule,
            providers: [NotificationService],
        };
    }
}
