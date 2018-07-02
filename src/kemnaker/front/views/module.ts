import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IndexPage} from '@kemnaker/front/views/pages/index.page';

const COMPONENTS: any[] = [];

const CONTAINERS: any[] = [];

const PAGES: any[] = [IndexPage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerFrontViewModule {}
