import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { blockcoreConfirmationService } from '@blockcore/services/confirmation/confirmation.service';
import { blockcoreConfirmationDialogComponent } from '@blockcore/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        blockcoreConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        blockcoreConfirmationService
    ]
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class blockcoreConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _blockcoreConfirmationService: blockcoreConfirmationService)
    {
    }
}
