import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

export const KEMNAKER_API_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('KEMNAKER_API_INTERCEPTORS');
