import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ContactPage} from '@kemnaker/information/views/pages/contact.page';
import {AboutPage} from '@kemnaker/information/views/pages/about.page';
import {FaqPage} from '@kemnaker/information/views/pages/faq.page';

const COMPONENTS: any[] = [];

const CONTAINERS: any[] = [];

const PAGES: any[] = [FaqPage, AboutPage, ContactPage];

const KENDO_MODULES: any[] = [];

const OTHER_MODULES: any[] = [CommonModule, RouterModule];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerInformationViewModule {}
