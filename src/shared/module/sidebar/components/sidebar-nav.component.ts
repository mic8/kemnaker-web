import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar-nav',
    template: `
        <nav class="sidebar-nav">
            <ul class="nav">
                <div *ngFor="let item of navigation">
                    <li *ngIf="isDivider(item)" class="nav-divider"></li>
                    <ng-container *ngIf="isTitle(item)">
                        <sidebar-nav-title [title]='item'></sidebar-nav-title>
                    </ng-container>
                    <ng-container *ngIf="!isDivider(item)&&!isTitle(item)">
                        <sidebar-nav-item [item]='item'></sidebar-nav-item>
                    </ng-container>
                </div>
            </ul>
        </nav>
    `,
})
export class SidebarNavComponent {
    @Input() public navigation: any[];

    public constructor() {
        this.navigation = [];
    }

    public isDivider(item: any): boolean {
        return item.divider;
    }

    public isTitle(item: any): boolean {
        return item.title;
    }
}
