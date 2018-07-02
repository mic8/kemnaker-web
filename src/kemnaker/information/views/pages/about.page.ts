import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'kemnaker-about-page',
    templateUrl: './about.page.html',
})
export class AboutPage implements OnInit {
    public constructor(private router: Router) {}

    public ngOnInit(): void {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            window.scrollTo(0, 0);
        });
    }
}
