import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NetworkService } from 'app/modules/network/network.service';

@Injectable({
    providedIn: 'root'
})
export class NetworkResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _networkService: NetworkService)
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
        return this._networkService.getData();
    }
}
