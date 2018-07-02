import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UbudFormModule} from '@ubud/form';
import {UbudLoaderModule} from '@ubud/loader';
import {RegisterForm} from '@kemnaker/user/views/components/register.form';
import {RegisterContainer} from '@kemnaker/user/views/containers/register.container';
import {RegisterPage} from '@kemnaker/user/views/pages/register.page';

const COMPONENTS: any[] = [RegisterForm];

const CONTAINERS: any[] = [RegisterContainer];

const PAGES: any[] = [RegisterPage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule, UbudFormModule, UbudLoaderModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerUserViewModule {}
