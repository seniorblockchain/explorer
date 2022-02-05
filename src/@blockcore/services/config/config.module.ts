import { ModuleWithProviders, NgModule } from '@angular/core';
import { blockcoreConfigService } from '@blockcore/services/config/config.service';
import { blockcore_APP_CONFIG } from '@blockcore/services/config/config.constants';

@NgModule()
// eslint-disable-next-line @typescript-eslint/naming-convention
export class blockcoreConfigModule
{
    /**
     * Constructor
     */
    constructor(private _blockcoreConfigService: blockcoreConfigService)
    {
    }

    /**
     * forRoot method for setting coin configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<blockcoreConfigModule>
    {
        return {
            ngModule : blockcoreConfigModule,
            providers: [
                {
                    provide : blockcore_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
