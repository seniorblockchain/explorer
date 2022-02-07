import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExplorerService } from 'app/modules/dashboard/explorer/explorer.service';

@Injectable({
    providedIn: 'root'
})
export class ExplorerResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _homeService: ExplorerService)
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
        return this._homeService.getData();
    }
}
