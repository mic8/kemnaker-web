import {NgModule} from '@angular/core';
import {KemnakerUserViewModule} from '@kemnaker/user/views/module';
import {KemnakerUserDomainModule} from '@kemnaker/user/domains/module';
import {USER_ROUTING} from '@kemnaker/user/user.routes';

@NgModule({
    imports: [KemnakerUserViewModule, KemnakerUserDomainModule, USER_ROUTING],
})
export class KemnakerUserModule {}
