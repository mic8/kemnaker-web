import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Breadcrumb } from '../../model/breadcrumb';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
    selector: 'app-breadcrumbs',
    template: `
        <ol class="breadcrumb">
            <li *ngFor="let breadcrumb of breadcrumbs$ | async; let last = last; let i = index"
                class="breadcrumb-item" [ngClass]="{active: last}">
                <i *ngIf="i !== 0" class="fas fa-angle-right"></i>
                <a *ngIf="!last && breadcrumb.url !== null" [routerLink]="breadcrumb.url">{{breadcrumb.title}}</a>
                <span *ngIf="last || breadcrumb.url === null">{{breadcrumb.title}}</span>
            </li>
        </ol>
    `,
})
export class AppBreadcrumbsComponent {
    breadcrumbs$: Observable<Breadcrumb[]>;

    constructor(service: BreadcrumbService) {
        this.breadcrumbs$ = service.breadcrumbs$;
    }
}
