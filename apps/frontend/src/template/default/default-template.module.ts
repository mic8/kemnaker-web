import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudUtilitiesModule } from '@ubud/utilities';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudUserControlModule } from '@ubud/user-control';
import { DefaultTemplate } from './components/default.template';
import { UbudTemplateModule } from '@ubud/template';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UbudUtilitiesModule,
        UbudTemplateModule,
        UbudTooltipModule,
        UbudDropdownModule,
        UbudUserControlModule,
    ],
    declarations: [DefaultTemplate],
    exports: [DefaultTemplate],
})
export class KemnakerDefaultTemplateModule {}
