import { Pipe, PipeTransform } from '@angular/core';
import {EnumOption} from '@shared/common';

@Pipe({
    name: 'enumerationText',
})
export class EnumerationTextPipe implements PipeTransform {
    public transform(value: any, options: EnumOption<any>[]): any {
        const find = options.find(item => {
            return item.id === value;
        });

        if (find) {
            return find.text;
        }

        return null;
    }
}
