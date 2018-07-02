import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
        <div sidebarToggler class="sidebar-toggle-overlay"></div>
        <button sidebarToggler class="sidebar-toggle btn btn-link"><i class="k-icon k-i-rows"></i></button>
        <div class="sidebar">
            <sidebar-nav [navigation]="navigation"></sidebar-nav>
            <button class="sidebar-minimizer" type="button" sidebarMinimizer brandMinimizer>
                <span class="btn-label">Tutup Navigasi</span>
            </button>
        </div>
    `,
})
export class SidebarComponent {
    @Input() public navigation: any[];

    public constructor() {
        this.navigation = [];
    }
}
