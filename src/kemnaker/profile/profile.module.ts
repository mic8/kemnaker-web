import {NgModule} from '@angular/core';
import {KemnakerProfileDomainModule} from '@kemnaker/profile/domains/module';
import {KemnakerProfileViewModule} from '@kemnaker/profile/views/module';
import {PROFILE_ROUTING} from '@kemnaker/profile/profile.routes';

@NgModule({
    imports: [KemnakerProfileDomainModule, KemnakerProfileViewModule, PROFILE_ROUTING],
})
export class KemnakerProfileModule {}
