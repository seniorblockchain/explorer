/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { blockcoreHorizontalNavigationComponent } from '@blockcore/components/navigation/horizontal/horizontal.component';
import { blockcoreNavigationService } from '@blockcore/components/navigation/navigation.service';
import { blockcoreNavigationItem } from '@blockcore/components/navigation/navigation.types';

@Component({
    selector       : 'blockcore-horizontal-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class blockcoreHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: blockcoreNavigationItem;
    @Input() name: string;

    private _blockcoreHorizontalNavigationComponent: blockcoreHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _blockcoreNavigationService: blockcoreNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._blockcoreHorizontalNavigationComponent = this._blockcoreNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._blockcoreHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
