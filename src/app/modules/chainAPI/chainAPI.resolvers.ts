import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ChainAPIService } from 'app/modules/chainAPI/chainAPI.service';

@Injectable({
    providedIn: 'root'
})
export class ChainAPIResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _chainAPIService: ChainAPIService)
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
        return this._chainAPIService.getData();
    }
}
