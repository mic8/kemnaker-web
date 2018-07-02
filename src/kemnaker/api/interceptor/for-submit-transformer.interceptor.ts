import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {getForSubmitMetadata} from '@kemnaker/api/interceptor/for-submit-transformer.decorator';

export class RequestForSubmitTransformerInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.body) {
            return next.handle(req);
        }

        if (req.body instanceof FormData) {
            return next.handle(req);
        }

        return next.handle(
            req.clone({
                body: this.forSubmit(req.body),
            }),
        );
    }

    private forSubmit(data: any): any {
        if (data instanceof Date || data instanceof Boolean || data instanceof String) {
            return data;
        }
        if (data instanceof Array) {
            return data.map((item: any) => this.forSubmit(item));
        }

        if (data !== null && 'object' === typeof data) {
            const transformed: any = {};
            Object.entries(data).forEach(([key, value]) => {
                transformed[key] = this.forSubmit(value);
            });

            if (!data.constructor || !getForSubmitMetadata(data)) {
                return transformed;
            }

            return data.id;
        }

        return data;
    }
}
