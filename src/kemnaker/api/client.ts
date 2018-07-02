import { HttpClient, HttpIntercepting } from '@ubud/http';
import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {KEMNAKER_API_INTERCEPTORS} from '@kemnaker/api/interceptor';

export class KemnakerApiClient extends HttpClient implements HttpIntercepting {
    public getInterceptorToken(): InjectionToken<HttpInterceptor[]> {
        return KEMNAKER_API_INTERCEPTORS;
    }
}
