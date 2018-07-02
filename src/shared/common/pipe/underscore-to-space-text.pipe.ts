import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'underscoreToSpaceText',
})
export class UnderscoreToSpaceTextPipe implements PipeTransform {
    public transform(value: string): string {
        return value
            .trim()
            .replace('_', ' ')
            .toString();
    }
}
