import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blockcoreCardComponent } from '@blockcore/components/card/card.component';

@NgModule({
    declarations: [
        blockcoreCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        blockcoreCardComponent
    ]
})
export class blockcoreCardModule
{
}
