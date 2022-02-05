import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { blockcoreConfirmationDialogComponent } from '@blockcore/services/confirmation/dialog/dialog.component';
import { blockcoreConfirmationConfig } from '@blockcore/services/confirmation/confirmation.types';

@Injectable()
// eslint-disable-next-line @typescript-eslint/naming-convention
export class blockcoreConfirmationService
{
    private _defaultConfig: blockcoreConfirmationConfig = {
        title      : 'Confirm action',
        message    : 'Are you sure you want to confirm this action?',
        icon       : {
            show : true,
            name : 'heroicons_outline:exclamation',
            color: 'warn'
        },
        actions    : {
            confirm: {
                show : true,
                label: 'Confirm',
                color: 'warn'
            },
            cancel : {
                show : true,
                label: 'Cancel'
            }
        },
        dismissible: false
    };

    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config: blockcoreConfirmationConfig = {}): MatDialogRef<blockcoreConfirmationDialogComponent>
    {
        // Merge the coin config with the default config
        const coinConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(blockcoreConfirmationDialogComponent, {
            autoFocus   : false,
            disableClose: !coinConfig.dismissible,
            data        : coinConfig,
            panelClass  : 'blockcore-confirmation-dialog-panel'
        });
    }
}
