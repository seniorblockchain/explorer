import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { blockcoreMockApiService } from '@blockcore/lib/mock-api';
import { coin as coinData } from 'app/mock-api/common/coin/data';

@Injectable({
    providedIn: 'root'
})
export class CoinMockApi
{
    private _coin: any = coinData;

    /**
     * Constructor
     */
    constructor(private _blockcoreMockApiService: blockcoreMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Coin - GET
        // -----------------------------------------------------------------------------------------------------
        this._blockcoreMockApiService
            .onGet('api/common/coin')
            .reply(() => [200, cloneDeep(this._coin)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Coin - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._blockcoreMockApiService
            .onPatch('api/common/coin')
            .reply(({request}) => {

                // Get the coin mock-api
                const coin = cloneDeep(request.body.coin);

                // Update the coin mock-api
                this._coin = assign({}, this._coin, coin);

                // Return the response
                return [200, cloneDeep(this._coin)];
            });
    }
}
