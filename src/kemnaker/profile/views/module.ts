import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfilePage} from '@kemnaker/profile/views/pages/profile.page';

const COMPONENTS: any[] = [];

const CONTAINERS: any[] = [];

const PAGES: any[] = [ProfilePage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerProfileViewModule {}
