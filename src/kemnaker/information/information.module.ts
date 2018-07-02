import {NgModule} from '@angular/core';
import {INFORMATION_ROUTING} from '@kemnaker/information/information.routes';
import {KemnakerInformationViewModule} from '@kemnaker/information/views/module';
import {KemnakerInformationDomainModule} from '@kemnaker/information/domains/module';

@NgModule({
    imports: [KemnakerInformationDomainModule, KemnakerInformationViewModule, INFORMATION_ROUTING],
})
export class KemnakerInformationModule {}
