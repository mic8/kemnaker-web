import { Injectable } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

@Injectable()
export class UtilityService {
    public constructor(private intl: IntlService) {}

    public toISODateString(date: Date): string {
        return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0];
    }

    public parseDate(dateString: any): Date {
        return this.intl.parseDate(dateString) || new Date();
    }
}
