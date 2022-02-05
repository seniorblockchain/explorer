import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { blockcoreLoadingBarComponent } from '@blockcore/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        blockcoreLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        blockcoreLoadingBarComponent
    ]
})
export class blockcoreLoadingBarModule
{
}
