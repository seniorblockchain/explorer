/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { TickerService } from 'app/modules/ticker/ticker.service';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';
@Component({
    selector: 'ticker',
    templateUrl: './ticker.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerComponent implements OnInit, OnDestroy {
    chartprice: ApexOptions = {};

    coinpricechart: ApexOptions;
    chartConversions: ApexOptions;
    chartImpressions: ApexOptions;
    chartVisits: ApexOptions;
    coinpricechartVsPageViews: ApexOptions;
    chartNewVsReturning: ApexOptions;
    chartGender: ApexOptions;
    chartAge: ApexOptions;
    chartLanguage: ApexOptions;
    data: any;
    dataprice: any;
    tickerLable: string = 'Ticker';
    ticker: any = {};
    error: any;
    chain: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _unsubscribeTicker: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _tickerService: TickerService,
        private _router: Router,
        private api: ApiService,
        public setup: SetupService,
        private cd: ChangeDetectorRef
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // Get the data
        this._tickerService.data3bax$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                if (data !== null) {
                    this.data = data;
                    this._prepareChartData();
                }
            });


        this._tickerService.dataprice$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((dataprice) => {

                if (dataprice !== null) {
                    this.dataprice = dataprice;
                    this._preparePriceChartData();
                }
            });


        this._tickerService.dataticker$
            .pipe(takeUntil(this._unsubscribeTicker))
            .subscribe((dataticker) => {
                if (dataticker !== null) {

                    // Prepare the ticker data
                    this.ticker = dataticker;
                }
            });

    }

    getChangeClass(value: number) {
        if (value < 0) {
          return 'negative';
        } else {
          return 'positive';
        }
      }
      getChangeIcon(value: number) {
        if (value < 0) {
          return 'trending-down';
        } else {
          return 'trending-up';
        }
      }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
        this._unsubscribeTicker.next(null);
        this._unsubscribeTicker.complete();
        this.data = {};
        this.dataprice = {};
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void {
        // Conversions
        this.chartConversions = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'area',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#38BDF8'],
            fill: {
                colors: ['#38BDF8'],
                opacity: 0.5
            },
            series: [{
                name: 'prices',
                data: this.data.prices
            }],
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                followCursor: true,
                theme: 'dark'
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                labels: {
                    formatter: (val): string => val.toString()
                }
            }
        };

        // Impressions
        this.chartImpressions = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'area',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#34D399'],
            fill: {
                colors: ['#34D399'],
                opacity: 0.5
            },
            series: [{
                name: 'market_caps',
                data: this.data.market_caps
            }],
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                followCursor: true,
                theme: 'dark'
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                labels: {
                    formatter: (val): string => val.toString()
                }
            }
        };

        // Visits
        this.chartVisits = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'area',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#FB7185'],
            fill: {
                colors: ['#FB7185'],
                opacity: 0.5
            },
            series: [{
                name: 'total_volumes',
                data: this.data.total_volumes
            }],
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                followCursor: true,
                theme: 'dark'
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                labels: {
                    formatter: (val): string => val.toString()
                }
            }
        };


    }

    private _preparePriceChartData(): void {
        this.coinpricechart = {
            chart: {
                animations: {
                    speed: 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                width: '100%',
                height: '100%',
                type: 'area',
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true
                }
            },
            colors: ['#818CF8'],
            dataLabels: {
                enabled: false
            },
            fill: {
                colors: ['#312E81']
            },
            grid: {
                show: true,
                borderColor: '#334155',
                padding: {
                    top: 10,
                    bottom: -40,
                    left: 0,
                    right: 0
                },
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            series: [{
                name: 'prices',
                data: this.dataprice.prices
            }],
            stroke: {
                width: 2
            },
            tooltip: {
                followCursor: true,
                theme: 'dark',
                x: {
                    format: 'MMM dd, yyyy'
                },
                y: {
                    formatter: (value: number): string => `${value}`
                }
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    stroke: {
                        color: '#475569',
                        dashArray: 0,
                        width: 2
                    }
                },
                labels: {
                    offsetY: -20,
                    style: {
                        colors: '#CBD5E1'
                    }
                },
                tickAmount: 20,
                tooltip: {
                    enabled: false
                },
                type: 'datetime'
            },
            yaxis: {

                show: false
            }
        };
    }
}
