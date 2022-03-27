/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blockcoreHighlightComponent } from '@blockcore/components/highlight/highlight.component';

@NgModule({
    declarations: [
        blockcoreHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        blockcoreHighlightComponent
    ]
})
export class blockcoreHighlightModule
{
}
