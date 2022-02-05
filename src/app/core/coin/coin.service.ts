import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { Coin } from 'app/core/coin/coin.types';

@Injectable({
    providedIn: 'root'
})
export class CoinService
{
    private _coin: ReplaySubject<Coin> = new ReplaySubject<Coin>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for coin
     *
     * @param value
     */
    set coin(value: Coin)
    {
        // Store the value
        this._coin.next(value);
    }

    get coin$(): Observable<Coin>
    {
        return this._coin.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in coin data
     */
    get(): Observable<Coin>
    {
        return this._httpClient.get<Coin>('api/common/coin').pipe(
            tap((coin) => {
                this._coin.next(coin);
            })
        );
    }

    /**
     * Update the coin
     *
     * @param coin
     */
    update(coin: Coin): Observable<any>
    {
        return this._httpClient.patch<Coin>('api/common/coin', {coin}).pipe(
            map((response) => {
                this._coin.next(response);
            })
        );
    }
}
