import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { TickerService } from 'app/modules/ticker/ticker.service';

@Injectable({
    providedIn: 'root'
})
export class TickerResolver implements Resolve<any>
{

    constructor(private _tickerService: TickerService)
    {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
       return forkJoin([
            this._tickerService.getData(),
            this._tickerService.updateTicker()
        ]);
    }
}
