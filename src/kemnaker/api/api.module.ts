import { Injector, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CamelResponseTransformerInterceptor, SnakeRequestTransformerInterceptor, UbudHttpModule } from '@ubud/http';
import {KEMNAKER_API_INTERCEPTORS} from '@kemnaker/api/interceptor';
import {apiServiceFactory} from '@kemnaker/api/factories/api-client.factory';
import {KemnakerApiClient} from '@kemnaker/api/client';
import {RequestForSubmitTransformerInterceptor} from '@kemnaker/api/interceptor/for-submit-transformer.interceptor';
import {ErrorNotificatorInterceptor} from '@kemnaker/api/interceptor/error-notificator.interceptor';

@NgModule({
    imports: [UbudHttpModule],
    providers: [
        {
            provide: KemnakerApiClient,
            useFactory: apiServiceFactory,
            deps: [HttpClient, Injector],
        },
        /*{
            provide: KEMNAKER_API_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },*/
        {
            provide: KEMNAKER_API_INTERCEPTORS,
            useClass: CamelResponseTransformerInterceptor,
            multi: true,
        },
        {
            provide: KEMNAKER_API_INTERCEPTORS,
            useClass: RequestForSubmitTransformerInterceptor,
            multi: true,
        },
        {
            provide: KEMNAKER_API_INTERCEPTORS,
            useClass: SnakeRequestTransformerInterceptor,
            multi: true,
        },
        {
            provide: KEMNAKER_API_INTERCEPTORS,
            useClass: ErrorNotificatorInterceptor,
            multi: true,
        },
    ],
})
export class KemnakerApiModule {}
