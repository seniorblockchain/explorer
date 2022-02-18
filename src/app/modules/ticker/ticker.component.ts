/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
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

    oneYearPriceChart: ApexOptions;
    lastweekPriceChart: ApexOptions;
    lastweekMarketCapChart: ApexOptions;
    lastweekVolumeChart: ApexOptions;
    chartNewVsReturning: ApexOptions;
    tickerLable: string = 'Ticker';
    error: any;
    chain: any;
    showloading: string='yes';
    subscription: any;

    ticker: any ;
    _oneYearPricechartdata: any ;
    _3boxchartdata: any ;


    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private api: ApiService,
        public setup: SetupService,
        private cd: ChangeDetectorRef
    ) {
        this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
            this.chain = this.setup.Chain;
            await this.updateTicker();
            await this.update3boxChart();
            await this.updateOneYearPriceChart();

        });
    }


    ngOnDestroy(): void {
               this.subscription.unsubscribe();
      }


    async update3boxChart() {
        const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
        if (!coins[0]) {
            this._3boxchartdata = {};
            return;
        }
        const url = `https://api.coingecko.com/api/v3/coins/${coins[0]}/market_chart?vs_currency=usd&days=7&interval=daily`;
        const request = await this.api.download(url);
        this._3boxchartdata = request;
        this.cd.detectChanges();
    }



    async updateOneYearPriceChart() {
        const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
        if (!coins[0]) {
            this.showloading = 'no';
            return;
        }

        const url = `https://api.coingecko.com/api/v3/coins/${coins[0]}/market_chart?vs_currency=usd&days=365&interval=daily`;
        const request = await this.api.download(url);
        this._oneYearPricechartdata = request;
        this._preparePriceChartData();
        this._prepare3BoxChartData();
        this.cd.detectChanges();

    }

    async updateTicker() {
        try {
            this.error = null;

            const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
            if (!coins[0]) {
                return;
            }

            // eslint-disable-next-line max-len
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins[0]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;

            const request = await this.api.download(url);

            this.ticker = request[coins[0]];

        }
        catch (err) {
            this.ticker = {};
            this.error = err;
        }
        this.cd.detectChanges();


    }

    ngOnInit(): void {
        // Attach SVG fill fixer to all ApexCharts
        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    }
                }
            }
        };
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






    private _fixSvgFill(element: Element): void {
        // Current URL
        const currentURL = this._router.url;
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) => {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    private _prepare3BoxChartData(): void {
        // Conversions
        this.lastweekPriceChart = {
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
                data: this._3boxchartdata.prices
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
        this.lastweekMarketCapChart = {
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
                data: this._3boxchartdata.market_caps
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
        this.lastweekVolumeChart = {
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
                data: this._3boxchartdata.total_volumes
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
        this.oneYearPriceChart = {
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
                data: this._oneYearPricechartdata.prices
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
