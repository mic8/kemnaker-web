import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';

@Pipe({ name: 'loading', pure: false })
export class LoadingTextPipe implements PipeTransform {
    private latestText: string;
    private returnedText: SafeHtml;
    private subscription: Subscription | null;

    public constructor(private sanitizer: DomSanitizer) {}

    public transform(text: string, isLoading: boolean = false, loadingText: string = 'Loading', maxDot: number = 3): SafeHtml {
        if (!isLoading) {
            this.dispose();
            return text;
        }

        if (this.latestText !== text) {
            this.latestText = text;
            this.dispose();

            this.subscription = timer(0, 500)
                .pipe(
                    tap(i => {
                        this.returnedText = this.sanitizer.bypassSecurityTrustHtml(
                            loadingText.padEnd(loadingText.length + (i % (maxDot + 1)), '.'),
                        );
                    }),
                )
                .subscribe();
        }

        return this.returnedText;
    }

    private dispose(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
            this.returnedText = '';
        }
    }
}
