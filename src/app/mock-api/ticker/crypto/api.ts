import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { blockcoreMockApiService } from '@blockcore/lib/mock-api';
import { crypto as cryptoData } from 'app/mock-api/ticker/crypto/data';

@Injectable({
    providedIn: 'root'
})
export class CryptoMockApi
{
    private _crypto: any = cryptoData;

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
        // @ Crypto - GET
        // -----------------------------------------------------------------------------------------------------
        this._blockcoreMockApiService
            .onGet('api/ticker/crypto')
            .reply(() => [200, cloneDeep(this._crypto)]);
    }
}
