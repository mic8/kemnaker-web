import { Injector } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {KemnakerApiClient} from '@kemnaker/api/client';

export function apiServiceFactory(http: HttpClient, injector: Injector): KemnakerApiClient {
    return new KemnakerApiClient(environment.kemnaker_api_endpoint, http, injector);
}
