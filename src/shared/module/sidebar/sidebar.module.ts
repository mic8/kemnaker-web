import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarNavComponent } from './components/sidebar-nav.component';
import { SidebarComponent } from './components/sidebar.component';
import { SidebarNavItemComponent } from './components/sidebar-nav-item.component';
import { SidebarNavLinkComponent } from './components/sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './components/sidebar-nav-title.component';
import { ReplaceSidebarHostDirective } from './directives/replace-sidebar-host.directive';
import { NAV_DROPDOWN_DIRECTIVES, NavDropdownDirective } from './directives/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './directives/sidebar.directive';

const COMPONENTS = [SidebarComponent, SidebarNavComponent, SidebarNavItemComponent, SidebarNavLinkComponent, SidebarNavTitleComponent];

const DIRECTIVES = [ReplaceSidebarHostDirective, NavDropdownDirective, ...NAV_DROPDOWN_DIRECTIVES, ...SIDEBAR_TOGGLE_DIRECTIVES];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...COMPONENTS],
})
export class SidebarModule {}
