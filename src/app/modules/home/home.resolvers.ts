import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'app/modules/home/home.service';

@Injectable({
    providedIn: 'root'
})
export class HomeResolver implements Resolve<any>
{

    constructor(private _homeService: HomeService)
    {
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>>
    {
        return await this._homeService.getData();
    }
}
