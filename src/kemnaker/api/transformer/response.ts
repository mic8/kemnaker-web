import { OperatorFunction, UnaryFunction } from 'rxjs/interfaces';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs/util/pipe';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import {Collection} from '@shared/common/interface/collection';

export namespace ResponseTransformer {
    export function toArrayClass<T>(type: { new (): T }): UnaryFunction<Observable<any>, Observable<T[]>> {
        return pipe(
            map(data => {
                if (Array.isArray(data)) {
                    return plainToClass(type, data);
                }

                throw new Error('The data is not an array');
            }),
        );
    }

    export function toSingleClass<T>(type: { new (): T }): UnaryFunction<Observable<any>, Observable<T>> {
        return pipe(
            map(data => {
                if (!Array.isArray(data)) {
                    return plainToClass(type, <T>data);
                }

                throw new Error('The data is an array');
            }),
        );
    }

    export function toData<T extends HttpResponse<any>>(): UnaryFunction<Observable<T>, Observable<any>> {
        return pipe(
            map((res: T) => {
                if (res.body) {
                    return res.body.data;
                }

                throw new Error('There are no body to be transformed');
            }),
        );
    }

    export function toCollection<T>(type: { new (): T }): OperatorFunction<any, Collection<T>> {
        return pipe(
            map((res: HttpResponse<any>) => {
                const { perPage, currentPage, total, lastPage } = res.body.meta.pagination;

                return {
                    total,
                    lastPage,
                    data: plainToClass(type, res.body.data),
                    limit: perPage,
                    page: currentPage,
                };
            }),
        );
    }
}
