/* eslint-disable max-len */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SetupService } from 'app/services/setup.service';
import { ApiService } from 'app/services/api.service';
@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    tickers: any;

    /**
     * Constructor
     */
    constructor(public setup: SetupService,
        private api: ApiService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    async getData(): Promise<Observable<any>> {
        await this.updateTicker();
        return this.tickers;
    }


    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    async ngOnInit() {
        await this.updateTicker();
    }



    async updateTicker() {

        try {
            const coins = this.setup.chains.map(c => c.coin).filter(c => c != null);

            const coinList = coins.join('%2C');
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
            const request = await this.api.download(url);
            this.tickers = request;
            this._data.next(this.tickers);
        }
        catch (err) {
            console.error(err);
        }
    }
}
