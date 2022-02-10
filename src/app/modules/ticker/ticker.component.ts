import { ticker } from './../../mock-api/ticker/ticker/data';
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
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
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
        this._tickerService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;
                // Prepare the chart data
                this._prepareChartData();
            });

        this._tickerService.dataticker$
            .pipe(takeUntil(this._unsubscribeTicker))
            .subscribe((t) => {
                if (t !== null) {
                    if (t.coin === this.setup.Chain.Symbol ) {
                        // Prepare the ticker data
                        this.ticker = t;
                    }
                }
            });

    }



    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
        this._unsubscribeTicker.next(null);
        this._unsubscribeTicker.complete();
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
        // Github issues
        this.chartprice = {
            chart: {
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#64748B', '#94A3B8'],
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0],
                background: {
                    borderWidth: 0
                }
            },
            grid: {
                borderColor: 'var(--blockcore-border)'
            },
            labels: this.data.price.labels,
            legend: {
                show: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            series: this.data.price.series,
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.75
                    }
                }
            },
            stroke: {
                width: [3, 0]
            },
            tooltip: {
                followCursor: true,
                theme: 'dark'
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    color: 'var(--blockcore-border)'
                },
                labels: {
                    style: {
                        colors: 'var(--blockcore-text-secondary)'
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                labels: {
                    offsetX: -16,
                    style: {
                        colors: 'var(--blockcore-text-secondary)'
                    }
                }
            }
        };

        // Task distribution
        this.chartTaskDistribution = {
            chart: {
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'polarArea',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            labels: this.data.taskDistribution.labels,
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    spokes: {
                        connectorColors: 'var(--blockcore-border)'
                    },
                    rings: {
                        strokeColor: 'var(--blockcore-border)'
                    }
                }
            },
            series: this.data.taskDistribution.series,
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.75
                    }
                }
            },
            stroke: {
                width: 2
            },
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#93C5FD',
                    shadeIntensity: 0.75,
                    shadeTo: 'dark'
                }
            },
            tooltip: {
                followCursor: true,
                theme: 'dark'
            },
            yaxis: {
                labels: {
                    style: {
                        colors: 'var(--blockcore-text-secondary)'
                    }
                }
            }
        };

        // Budget distribution
        this.chartBudgetDistribution = {
            chart: {
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'radar',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#818CF8'],
            dataLabels: {
                enabled: true,
                formatter: (val: number): string | number => `${val}%`,
                textAnchor: 'start',
                style: {
                    fontSize: '13px',
                    fontWeight: 500
                },
                background: {
                    borderWidth: 0,
                    padding: 4
                },
                offsetY: -15
            },
            markers: {
                strokeColors: '#818CF8',
                strokeWidth: 4
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors: 'var(--blockcore-border)',
                        connectorColors: 'var(--blockcore-border)'
                    }
                }
            },
            series: this.data.budgetDistribution.series,
            stroke: {
                width: 2
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: (val: number): string => `${val}%`
                }
            },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        fontSize: '12px',
                        fontWeight: '500'
                    }
                },
                categories: this.data.budgetDistribution.categories
            },
            yaxis: {
                max: (max: number): number => parseInt((max + 10).toFixed(0), 10),
                tickAmount: 7
            }
        };

        // Weekly expenses
        this.chartWeeklyExpenses = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#22D3EE'],
            series: this.data.weeklyExpenses.series,
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                theme: 'dark'
            },
            xaxis: {
                type: 'category',
                categories: this.data.weeklyExpenses.labels
            },
            yaxis: {
                labels: {
                    formatter: (val): string => `$${val}`
                }
            }
        };

        // Monthly expenses
        this.chartMonthlyExpenses = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#4ADE80'],
            series: this.data.monthlyExpenses.series,
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                theme: 'dark'
            },
            xaxis: {
                type: 'category',
                categories: this.data.monthlyExpenses.labels
            },
            yaxis: {
                labels: {
                    formatter: (val): string => `$${val}`
                }
            }
        };

        // Yearly expenses
        this.chartYearlyExpenses = {
            chart: {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#FB7185'],
            series: this.data.yearlyExpenses.series,
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                theme: 'dark'
            },
            xaxis: {
                type: 'category',
                categories: this.data.yearlyExpenses.labels
            },
            yaxis: {
                labels: {
                    formatter: (val): string => `$${val}`
                }
            }
        };
    }
}
