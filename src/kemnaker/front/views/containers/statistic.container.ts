import {Component} from '@angular/core';

@Component({
    selector: 'kemnaker-statistic-container',
    template: `
        <div class="statistik-header">
            <h1>Statistik</h1>
            <p class="description statistik-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br> Commodi dolorum et maxime minus,
                obcaecati.
            </p>
        </div>
        <div class="statistik-chart">
            <div class="nav nav-tabs" id="statistik-tab">
                <a class="nav-item nav-link" [class.active]="index === 0" (click)="index = 0" id="info-tab">Info Kerja</a>
                <a class="nav-item nav-link" [class.active]="index === 1" (click)="index = 1" id="pelatihan-tab">Pelatihan</a>
                <a class="nav-item nav-link" [class.active]="index === 2" (click)="index = 2" id="pemagangan-tab">Pemagangan</a>
                <a class="nav-item nav-link" [class.active]="index === 3" (click)="index = 3" id="pengaduan-tab">Pengaduan</a>
                <a class="nav-item nav-link" [class.active]="index === 4" (click)="index = 4" id="wklp-tab">WKLP</a>
            </div>
            <div class="tab-content" id="statistik-content">
                <div class="tab-pane" [class.show]="index === 0" [class.active]="index === 0" id="nav-info">
                    <kemnaker-work-info-chart-component></kemnaker-work-info-chart-component>
                </div>
                <div class="tab-pane" [class.show]="index === 1" [class.active]="index === 1" id="nav-pelatihan">
                    <kemnaker-training-chart-component></kemnaker-training-chart-component>
                </div>
                <div class="tab-pane" [class.show]="index === 2" [class.active]="index === 2" id="nav-pemagangan">
                    <kemnaker-internship-chart-component></kemnaker-internship-chart-component>
                </div>
                <div class="tab-pane" [class.show]="index === 3" [class.active]="index ===3 " id="nav-pengaduan">
                    <kemnaker-complaint-chart-component></kemnaker-complaint-chart-component>
                </div>
                <div class="tab-pane" [class.show]="index === 4" [class.active]="index === 4" id="nav-wklp">
                    <kemnaker-wklp-chart-component></kemnaker-wklp-chart-component>
                </div>
            </div>
        </div>
    `,
})
export class StatisticContainer {
    public index: number = 0;
}
