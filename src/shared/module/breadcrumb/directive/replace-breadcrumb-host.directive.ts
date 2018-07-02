import { Directive } from '@angular/core';
import { ReplaceHostDirective } from '@shared/module/common/directives/replace-host.directive';

@Directive({
    selector: 'app-breadcrumbs',
})
export class ReplaceBreadcrumbHost extends ReplaceHostDirective {}
