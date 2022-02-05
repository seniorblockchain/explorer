import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { blockcoreMockApiService } from '@blockcore/lib/mock-api';
import { home as homeData } from 'app/mock-api/dashboards/home/data';

@Injectable({
    providedIn: 'root'
})
export class HomeMockApi
{
    private _home: any = homeData;

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
            .onGet('api/dashboards/home')
            .reply(() => [200, cloneDeep(this._home)]);
    }
}
