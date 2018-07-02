import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar-nav-link',
    template: `
        <a *ngIf="!isExternalLink(); else external"
           [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
           routerLinkActive="active"
           sidebarToggler
           [routerLink]="[link.url]">
            <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
            <i *ngIf="isIconContent()" class="{{ link.icon }} v-align-middle">{{ link.iconContent }}</i>
            {{ link.name }}
            <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
        </a>
        <ng-template #external>
            <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
                <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
                <i *ngIf="isIconContent()" class="{{ link.icon }} v-align-middle">{{ link.iconContent }}</i>
                {{ link.name }}
                <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
            </a>
        </ng-template>

    `,
})
export class SidebarNavLinkComponent {
    @Input() public link: any;

    public hasVariant(): boolean {
        return this.link.variant;
    }

    public isBadge(): boolean {
        return this.link.badge;
    }

    public isExternalLink(): boolean {
        return this.link.url.substring(0, 4) === 'http';
    }

    public isIcon(): boolean {
        return this.link.icon && !this.link.iconContent;
    }

    public isIconContent(): boolean {
        return this.link.icon && this.link.iconContent;
    }
}
