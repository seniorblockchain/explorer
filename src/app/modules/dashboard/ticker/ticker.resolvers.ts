import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TickerService } from 'app/modules/dashboard/ticker/ticker.service';

@Injectable({
    providedIn: 'root'
})
export class TickerResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _tickerService: TickerService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._tickerService.getData();
    }
}
