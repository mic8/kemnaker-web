import { NgModule } from '@angular/core';
import { IntlModule } from '@progress/kendo-angular-intl';
import { UtilityService } from './services/utility.service';
import { ReplaceHostDirective } from './directives/replace-host.directive';
import { DisableControlDirective } from './directives/disable-control.directive';
import { HtmlSanitizerPipe } from './pipe/html-sanitizer.pipe';
import { CommonModule as AngularCommonModule } from '@angular/common';

@NgModule({
    imports: [AngularCommonModule, IntlModule],
    declarations: [ReplaceHostDirective, DisableControlDirective, HtmlSanitizerPipe],
    exports: [AngularCommonModule, IntlModule, ReplaceHostDirective, DisableControlDirective, HtmlSanitizerPipe],
    providers: [UtilityService],
})
export class SharedCommonModule {}
