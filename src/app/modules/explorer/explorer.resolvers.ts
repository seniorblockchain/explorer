import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ExplorerService } from 'app/modules/explorer/explorer.service';

@Injectable({
    providedIn: 'root'
})
export class ExplorerResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _explorerService: ExplorerService) {
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
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>> {
        return forkJoin([
            await this._explorerService.getBlocksData(),
            await this._explorerService.getInfoData()
        ]);
    }
}
