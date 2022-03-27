/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { blockcoreMediaWatcherService } from '@blockcore/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        blockcoreMediaWatcherService
    ]
})
export class blockcoreMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _blockcoreMediaWatcherService: blockcoreMediaWatcherService)
    {
    }
}
