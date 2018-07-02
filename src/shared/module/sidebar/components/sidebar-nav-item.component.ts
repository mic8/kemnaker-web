import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar-nav-item',
    template: `
        <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
            <sidebar-nav-link [link]='item'></sidebar-nav-link>
        </li>
        <ng-template #dropdown>
            <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
                [class.open]="isActive()"
                [class.active]="isActive()"
                routerLinkActive="active"
                navDropdown>
                <a class="nav-link nav-dropdown-toggle" navDropdownToggle>
                    <i *ngIf="isIcon()" class="{{ item.icon }}"></i>
                    <i *ngIf="isIconContent()" class="{{ item.icon }} v-align-middle">{{ item.iconContent }}</i>
                    {{ item.name }}
                    <span *ngIf="isBadge()" [ngClass]="'badge badge-' + item.badge.variant">{{ item.badge.text }}</span>
                </a>
                <ul class="nav-dropdown-items">
                    <ng-template ngFor let-child [ngForOf]="item.children">
                        <sidebar-nav-item [item]='child'></sidebar-nav-item>
                    </ng-template>
                </ul>
            </li>
        </ng-template>
    `,
})
export class SidebarNavItemComponent {
    @Input() public item: any;

    public constructor(private router: Router) {}

    public hasClass(): boolean {
        return this.item.class;
    }

    public isDropdown(): boolean {
        return this.item.children;
    }

    public isActive(): boolean {
        return this.router.isActive(this.item.url, false);
    }

    public isBadge(): boolean {
        return this.item.badge;
    }

    public isIcon(): boolean {
        return this.item.icon && !this.item.iconContent;
    }

    public isIconContent(): boolean {
        return this.item.icon && this.item.iconContent;
    }
}
