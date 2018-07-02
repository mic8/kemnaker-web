import {Injectable} from '@angular/core';
import {KemnakerApiClient} from '@kemnaker/api/client';
import {Registration} from '@kemnaker/user/domains/models/registration';
import {Observable} from 'rxjs/Observable';
import {User} from '@kemnaker/user/domains/models/user';
import {ResponseTransformer} from '@kemnaker/api/transformer/response';

@Injectable()
export class UserService {
    public constructor(private api: KemnakerApiClient) {}

    public registerUser(registration: Registration): Observable<User> {
        return this.api.post(`users`, registration).pipe(
            ResponseTransformer.toData(),
            ResponseTransformer.toSingleClass(User),
        );
    }
}
