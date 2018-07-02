import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppBreadcrumbsComponent } from './component/app-breadcrumbs/app-breadcrumbs.component';
import { ReplaceBreadcrumbHost } from './directive/replace-breadcrumb-host.directive';
import { BreadcrumbService } from './service/breadcrumb.service';

const COMPONENTS = [AppBreadcrumbsComponent];
const DIRECTIVES = [ReplaceBreadcrumbHost];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    providers: [BreadcrumbService],
    exports: [AppBreadcrumbsComponent],
})
export class BreadcrumbModule {}
