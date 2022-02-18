import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { blockcoreConfirmationModule } from '@blockcore/services/confirmation';
import { blockcoreProgressModule } from '@blockcore/services/loading';
import { blockcoreMediaWatcherModule } from '@blockcore/services/media-watcher/media-watcher.module';
import { blockcoreSplashScreenModule } from '@blockcore/services/splash-screen/splash-screen.module';
import { blockcoreUtilsModule } from '@blockcore/services/utils/utils.module';

@NgModule({
    imports  : [
        blockcoreConfirmationModule,
        blockcoreProgressModule,
        blockcoreMediaWatcherModule,
        blockcoreSplashScreenModule,
        blockcoreUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class blockcoreModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: blockcoreModule)
    {
        if ( parentModule )
        {
            throw new Error('blockcoreModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
