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
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _ticker: BehaviorSubject<any> = new BehaviorSubject(null);

    error: any;
    ticker: any = {};
    chain: any;
    subscription: any;


    constructor(private _httpClient: HttpClient, private api: ApiService,
        public setup: SetupService,) {
        this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
            await this.updateTicker();
        });
        this.chain = this.setup.Chain;
    }

    async updateTicker() {
        try {
            this.error = null;
            const url = this.setup.Explorer?.Ticker?.ApiUrl;

            if (!url) {
                this.ticker = {};
                return;
            }
            const request = await this.api.download(url);

            const changePercentage = this.navigator(request, this.setup.Explorer.Ticker.PercentagePath);
            let changeType = 'neutral';

            if (changePercentage < 0) {
                changeType = 'negative';
            }

            if (changePercentage > 0) {
                changeType = 'positive';
            }

            this.ticker = {
                coin: this.setup.Chain.Symbol,
                btc: this.navigator(request, this.setup.Explorer.Ticker.PricePathBTC),
                usd: this.navigator(request, this.setup.Explorer.Ticker.PricePathUSD),
                changePercentage,
                changeType
            };

        }
        catch (err) {
            this.ticker = {coin: null, btc: null, usd: null, changePercentage: null, changeType: null };
            this.error = err;
        }
        this._ticker.next(this.ticker);

    }
    navigator = (obj, path) => {
        for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
            if (Array.isArray((obj[path[i]]))) {
                obj = obj[path[i]][path[i + 1]];
                i++;
            } else {
                obj = obj[path[i]];
            }
        };
        return obj;
    };

    get data$(): Observable<any> {
        return  this._data.asObservable();
    }
    get dataticker$(): Observable<any> {
        return  this._ticker.asObservable();
    }
    getData(): Observable<any> {

        return this._httpClient.get('api/ticker/ticker').pipe(
                tap((response: any) => {
                    this._data.next(response);
                })
            );




    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
