/* eslint-disable max-len */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { SetupService } from 'app/services/setup.service';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
    searchTerm: any;
    chartprice: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    tickers: any ;
    selectNetwork: string = 'Select Network';
    subscription: any;
    optionValue: string = 'STRAX';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private api: ApiService,
        private _router: Router,
        public setup: SetupService,
        private cdr: ChangeDetectorRef
    ) {
        if (!setup.multiChain) {
            _router.navigate([setup.current.toLowerCase()+'/explorer']);
        }

    }

    async ngOnInit() {
        await this.setup.setChain('blockcore');

        await this.updateTickers();
      }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getChangeClass(value: number) {
        if (value < 0) {
            return 'negative';
        } else {
            return 'positive';
        }
    }

    async updateTickers() {

        try {
            const coins = this.setup.chains.map(c => c.coin).filter(c => c != null);

            const coinList = coins.join('%2C');
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
            const request = await this.api.download(url);
            this.tickers = request;
        }
        catch {
        }
        this.cdr.detectChanges();
    }


    inputType(value: string) {
        // debugger;
        if (value.startsWith(this.setup.Network.NetworkWitnessPrefix)) {
            return 'address';
        } else if (value.length < 20) { // LONG_MAX: 9223372036854775807
            return 'index';
        } else if (value.length > 30 && value.length < 54) {
            return 'address';
        } else {
            return 'hash';
        }
    }

    async search() {
        await this.setup.setChain(this.optionValue.toLowerCase());

        const text = this.searchTerm;
        const inputType = this.inputType(text);

        switch (inputType) {
            case 'index': {
                // tslint:disable-next-line: radix
                const index = parseInt(text, 10);

                // eslint-disable-next-line use-isnan
                if (index !== NaN && index > 0) {
                    this._router.navigate([this.setup.current, 'explorer', 'block', index]);
                }

                break;
            }
            case 'address': {
                this._router.navigate([this.setup.current, 'explorer', 'address', text]);
                break;
            }
            case 'hash': {
                // Search first for block then if not found, search for transaction.
                let block = null;

                // TODO: An important todo is to put the search results from here into state-management!
                //       That way, we will avoid loading the transaction/block twice when searching.

                try {
                    block = await this.api.getBlockByHash(text);
                } catch (err) {
                    // We could check if this is actually an 404 or some other error. Should we?
                }

                if (block) {
                    this._router.navigate([this.setup.current, 'explorer', 'block', block.blockHash]);
                } else {
                    const transaction = await this.api.getTransaction(text);
                    this._router.navigate([this.setup.current, 'explorer', 'transaction', transaction.transactionId]);
                }

                break;
            }
        }
    }

}
