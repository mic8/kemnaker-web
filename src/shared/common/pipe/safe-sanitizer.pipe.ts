import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeSanitizer' })
export class SafeSanitizerPipe implements PipeTransform {
    public constructor(private sanitizer: DomSanitizer) {}

    public transform(url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
