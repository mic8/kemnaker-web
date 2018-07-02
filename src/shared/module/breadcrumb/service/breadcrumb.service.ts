import { Injectable } from '@angular/core';
import { Breadcrumb } from '../model/breadcrumb';
import { Observable } from 'rxjs/Observable';
import { StoreData } from '@shared/module/common/model/store-data';

@Injectable()
export class BreadcrumbService {
    private readonly _breadcrumbs: StoreData<Breadcrumb[]>;

    public constructor() {
        this._breadcrumbs = new StoreData([]);
    }

    public get breadcrumbs$(): Observable<Breadcrumb[]> {
        return this._breadcrumbs.stream$;
    }

    public updateBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
        this._breadcrumbs.value = breadcrumbs.map((b: Breadcrumb, index: number) => {
            if (index) {
                b.url = `${breadcrumbs[index - 1].url}/${b.url}`;
            }
            return b;
        });
    }
}
