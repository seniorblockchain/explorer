import { coin } from './../../mock-api/common/coin/data';
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, tap } from 'rxjs';
import { SetupService } from 'app/services/setup.service';
import { ApiService } from 'app/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class TickerService {
    private _data3bax: BehaviorSubject<any> = new BehaviorSubject(null);
    private _dataprice: BehaviorSubject<any> = new BehaviorSubject(null);
    private _dataticker: BehaviorSubject<any> = new BehaviorSubject(null);

    error: any;
    chain: any;
    subscription: any;

    _ticker: any = {};
    _pricechartdata: any = {};
    _3boxchartdata: any = {};

    constructor(private _httpClient: HttpClient, private api: ApiService,
        public setup: SetupService,) {
        this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
            await this.updateTicker();
        });
        this.chain = this.setup.Chain;
    }

    get data3bax$(): Observable<any> {
        return this._data3bax.asObservable();
    }

    get dataprice$(): Observable<any> {
        return this._dataprice.asObservable();
    }

    get dataticker$(): Observable<any> {
        return this._dataticker.asObservable();
    }


    async get3baxChartData(): Promise<Observable<any>> {
        await this.update3boxChart();
        return this._3boxchartdata;
    }

    async update3boxChart() {
        const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
        if (!coins[0]) {
            this._3boxchartdata = {};
            this._data3bax.next(null);
            return;
        }
        const url = `https://api.coingecko.com/api/v3/coins/${coins[0]}/market_chart?vs_currency=usd&days=7&interval=daily`;
        const request = await this.api.download(url);
        this._3boxchartdata = request;
        this._data3bax.next(this._3boxchartdata);
    }

    async getPriceChartData(): Promise<Observable<any>> {
        await this.updatePriceChart();
        return this._pricechartdata;
    }

    async updatePriceChart() {
        const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
        if (!coins[0]) {
            this._pricechartdata = {};
            this._dataprice.next(null);
            return;
        }
        const url = `https://api.coingecko.com/api/v3/coins/${coins[0]}/market_chart?vs_currency=usd&days=365&interval=daily`;
        const request = await this.api.download(url);
        this._pricechartdata = request;
        this._dataprice.next(this._pricechartdata);
    }

    async updateTicker() {
        try {
            this.error = null;

            const coins = this.setup.chains.map(c => c).filter(c => c.symbol === this.setup.Chain?.Symbol).map(c => c.coin);
            if (!coins[0]) {
                this._ticker = {};
                this._dataticker.next(null);
                return;
            }

            // eslint-disable-next-line max-len
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins[0]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;

            const request = await this.api.download(url);

            this._ticker = request[coins[0]];
        }
        catch (err) {
            this._ticker = {};
            this.error = err;
        }
        this._dataticker.next(this._ticker);

    }




    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
