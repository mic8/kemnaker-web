import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class StoreData<T> {
    public readonly stream$: Observable<T>;
    private _value: BehaviorSubject<T>;

    public constructor(initial: T) {
        this._value = new BehaviorSubject<T>(initial);
        this.stream$ = this._value.asObservable();
    }

    public get value(): T {
        return this._value.getValue();
    }

    public set value(value: T) {
        this._value.next(value);
    }
}
