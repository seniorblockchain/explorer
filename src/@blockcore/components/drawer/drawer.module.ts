/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blockcoreDrawerComponent } from '@blockcore/components/drawer/drawer.component';

@NgModule({
    declarations: [
        blockcoreDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        blockcoreDrawerComponent
    ]
})
export class blockcoreDrawerModule
{
}
