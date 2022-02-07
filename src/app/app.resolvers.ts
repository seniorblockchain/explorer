import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { ShortcutsService } from 'app/layout/common/shortcuts/shortcuts.service';
import { CoinService } from 'app/core/coin/coin.service';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';
import { environment } from '../../src/environments/environment';
@Injectable({
    providedIn: 'root'
})


export class InitialDataResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _navigationService: NavigationService,
        private _shortcutsService: ShortcutsService,
        private _coinService: CoinService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Use this resolver to resolve initial mock-api for the application
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // Fork join multiple API endpoint calls to wait all of them to finish
        return forkJoin([
            this._navigationService.get(),
            this._shortcutsService.getAll(),
            this._coinService.get()
        ]);
    }


}
