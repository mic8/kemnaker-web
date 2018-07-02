import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudFormModule } from '@ubud/form';
import { LoginForm } from '@kemnaker/auth/views/components/login.form';
import { LoginContainer } from '@kemnaker/auth/views/containers/login.container';
import { LoginPage } from '@kemnaker/auth/views/pages/login.page';
import { UbudLoaderModule } from '@ubud/loader';
import { SignOutPage } from '@kemnaker/auth/views/pages/sign-out.page';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, UbudFormModule, UbudLoaderModule, RouterModule],
    declarations: [LoginForm, LoginContainer, LoginPage, SignOutPage],
    exports: [LoginForm, LoginContainer],
})
export class KemnakerAuthViewModule {}
