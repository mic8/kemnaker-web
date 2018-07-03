import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IndexPage} from '@kemnaker/front/views/pages/index.page';
import {StatisticContainer} from '@kemnaker/front/views/containers/statistic.container';
import {WorkInfoChartComponent} from '@kemnaker/front/views/components/work-info-chart.component';
import {TrainingChartComponent} from '@kemnaker/front/views/components/training-chart.component';
import {InternshipChartComponent} from '@kemnaker/front/views/components/internship-chart.component';
import {ComplaintChartComponent} from '@kemnaker/front/views/components/complaint-chart.component';
import {WklpChartComponent} from '@kemnaker/front/views/components/wklp-chart.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ChartsModule} from '@progress/kendo-angular-charts';
import 'hammerjs';
import {KemnakerNewsViewModule} from '@kemnaker/news/views/module';
import {NewsContainer} from '@kemnaker/front/views/containers/news.container';

const COMPONENTS: any[] = [WorkInfoChartComponent, TrainingChartComponent, InternshipChartComponent, ComplaintChartComponent, WklpChartComponent];

const CONTAINERS: any[] = [StatisticContainer, NewsContainer];

const PAGES: any[] = [IndexPage];

const KENDO_MODULES: any[] = [ChartsModule];

const OTHER_MODULES: any[] = [
    CommonModule, RouterModule,
    NgCircleProgressModule.forRoot({
        radius: 100,
        maxPercent: 100,
        animation: true,
        animationDuration: 300,
        animateSubtitle: true,
        animateTitle: true,
        responsive: true,
        outerStrokeWidth: 10,
        innerStrokeWidth: 5,
        innerStrokeColor: '#15406a',
        outerStrokeColor: '#15406a',
        unitsColor: '#15406a',
        titleColor: '#15406a',
        titleFontSize: '60',
        unitsFontSize: '40',
        showSubtitle: false,
    }),
    KemnakerNewsViewModule,
];

@NgModule({
    declarations: [...COMPONENTS, ...CONTAINERS, ...PAGES],
    imports: [...KENDO_MODULES, ...OTHER_MODULES],
    exports: [...COMPONENTS, ...CONTAINERS],
})
export class KemnakerFrontViewModule {
}
