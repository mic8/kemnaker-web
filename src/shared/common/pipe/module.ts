import { NgModule } from '@angular/core';
import {LoadingTextPipe} from '@shared/common/pipe/loading-text-pipe';
import {StripTagPipe} from '@shared/common/pipe/strip-tag.pipe';
import {UnderscoreToSpaceTextPipe} from '@shared/common/pipe/underscore-to-space-text.pipe';
import {SafeSanitizerPipe} from '@shared/common/pipe/safe-sanitizer.pipe';
import {EnumerationTextPipe} from '@shared/common/pipe/enumeration-text.pipe';

@NgModule({
    declarations: [LoadingTextPipe, StripTagPipe, UnderscoreToSpaceTextPipe, SafeSanitizerPipe, EnumerationTextPipe],
    exports: [LoadingTextPipe, StripTagPipe, UnderscoreToSpaceTextPipe, SafeSanitizerPipe, EnumerationTextPipe],
})
export class SharedPipeModule {}
