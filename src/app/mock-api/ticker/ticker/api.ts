import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { blockcoreMockApiService } from '@blockcore/lib/mock-api';
import { ticker as tickerData } from 'app/mock-api/ticker/ticker/data';

@Injectable({
    providedIn: 'root'
})
export class TickerMockApi
{
    private _ticker: any = tickerData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._blockcoreMockApiService
            .onGet('api/ticker/ticker')
            .reply(() => [200, cloneDeep(this._ticker)]);
    }
}
