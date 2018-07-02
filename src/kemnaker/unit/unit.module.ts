import {NgModule} from '@angular/core';
import {KemnakerUnitDomainModule} from '@kemnaker/unit/domains/module';
import {KemnakerUnitViewModule} from '@kemnaker/unit/views/module';
import {UNIT_ROUTING} from '@kemnaker/unit/unit.routes';

@NgModule({
    imports: [KemnakerUnitDomainModule, KemnakerUnitViewModule, UNIT_ROUTING],
})
export class KemnakerUnitModule {}
