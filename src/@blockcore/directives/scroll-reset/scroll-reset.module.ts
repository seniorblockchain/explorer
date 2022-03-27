/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { blockcoreScrollResetDirective } from '@blockcore/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        blockcoreScrollResetDirective
    ],
    exports     : [
        blockcoreScrollResetDirective
    ]
})
export class blockcoreScrollResetModule
{
}
