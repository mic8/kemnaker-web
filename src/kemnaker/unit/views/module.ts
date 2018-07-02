import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SecretariatGeneralPage} from '@kemnaker/unit/views/pages/secretariat-general.page';
import {WorkUnitPage} from '@kemnaker/unit/views/pages/work-unit.page';

const COMPONENTS: any[] = [];

const CONTAINERS: any[] = [];

const PAGES: any[] = [WorkUnitPage, SecretariatGeneralPage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...CONTAINERS, ...COMPONENTS],
})
export class KemnakerUnitViewModule {}
