import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripTag' })
export class StripTagPipe implements PipeTransform {
    public transform(text: string): string {
        return (text || '').replace(/<.*?>/g, '');
    }
}
