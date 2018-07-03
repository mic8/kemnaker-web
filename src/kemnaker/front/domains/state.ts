import {News} from '@kemnaker/news/domains/models/news';

export interface FrontState {
    ui: {
        loading: boolean;
        errorMessages: string;
    };
    list: {
        news: News[];
    };
}
