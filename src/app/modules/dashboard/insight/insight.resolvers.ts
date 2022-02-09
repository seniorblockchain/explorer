import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InsightService } from 'app/modules/dashboard/insight/insight.service';

@Injectable({
    providedIn: 'root'
})
export class InsightResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _insightService: InsightService)
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
        return this._insightService.getData();
    }
}
