/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { blockcoreAlertComponent } from '@blockcore/components/alert/alert.component';

@NgModule({
    declarations: [
        blockcoreAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        blockcoreAlertComponent
    ]
})
export class blockcoreAlertModule
{
}
