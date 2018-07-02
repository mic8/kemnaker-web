import {NgModule} from '@angular/core';
import {KemnakerFrontDomainModule} from '@kemnaker/front/domains/module';
import {KemnakerFrontViewModule} from '@kemnaker/front/views/module';
import {FRONT_ROUTING} from '@kemnaker/front/front.routes';

@NgModule({
    imports: [KemnakerFrontDomainModule, KemnakerFrontViewModule, FRONT_ROUTING],
})
export class KemnakerFrontModule {}
