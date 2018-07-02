import {News} from '@kemnaker/news/domains/models/news';

export interface NewsState {
    ui: {
        loading: boolean;
        errorMessages: string;
    };
    list: {
        news: News[];
    };
}
