import { Directive } from '@angular/core';
import { ReplaceHostDirective } from '../../common/directives/replace-host.directive';

@Directive({
    selector: 'sidebar,sidebar-nav,sidebar-nav-dropdown,sidebar-nav-item,sidebar-nav-link,sidebar-nav-title',
})
export class ReplaceSidebarHostDirective extends ReplaceHostDirective {}
