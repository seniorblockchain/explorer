/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { blockcoreUtilsService } from '@blockcore/services/utils/utils.service';

@NgModule({
    providers: [
        blockcoreUtilsService
    ]
})
export class blockcoreUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _blockcoreUtilsService: blockcoreUtilsService)
    {
    }
}
