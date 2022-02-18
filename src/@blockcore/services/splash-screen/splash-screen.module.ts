import { NgModule } from '@angular/core';
import { blockcoreSplashScreenService } from '@blockcore/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        blockcoreSplashScreenService
    ]
})
export class blockcoreSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _blockcoreSplashScreenService: blockcoreSplashScreenService)
    {
    }
}
