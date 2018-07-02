import {Component, Input} from '@angular/core';
import {News} from '@kemnaker/news/domains/models/news';

@Component({
    selector: 'kemnaker-news-grid-component',
    templateUrl: './news-grid.component.html',
})
export class NewsGridComponent {
    @Input() public news: News[];
}
