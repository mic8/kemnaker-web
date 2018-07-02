import { Injectable } from '@angular/core';

@Injectable()
export class DateTimezoneService {
    public convertFromDate(date: Date): string | null {
        if (date) {
            const tz = date.getTimezoneOffset() / 60;
            let strTz = `-${Math.abs(tz)}`;
            if (tz < 0) {
                strTz = `+${Math.abs(tz)}`;
            }

            return `${this.formatString(date.getFullYear().toString())}-${this.formatString(
                (date.getMonth() + 1).toString(),
            )}-${this.formatString(date.getDate().toString())} ${this.formatString(date.getHours().toString())}:${this.formatString(
                date.getMinutes().toString(),
            )}:${this.formatString(date.getSeconds().toString())} ${strTz}`;
        }

        return null;
    }

    private formatString(data: string): string {
        if (data.length < 2) {
            return `0${data}`;
        }

        return data;
    }
}
