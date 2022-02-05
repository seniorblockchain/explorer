import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { blockcoreHorizontalNavigationComponent } from '@blockcore/components/navigation/horizontal/horizontal.component';
import { blockcoreNavigationService } from '@blockcore/components/navigation/navigation.service';
import { blockcoreNavigationItem } from '@blockcore/components/navigation/navigation.types';
import { blockcoreUtilsService } from '@blockcore/services/utils/utils.service';

@Component({
    selector       : 'blockcore-horizontal-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class blockcoreHorizontalNavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item: blockcoreNavigationItem;
    @Input() name: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    private _blockcoreHorizontalNavigationComponent: blockcoreHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _blockcoreNavigationService: blockcoreNavigationService,
        private _blockcoreUtilsService: blockcoreUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._blockcoreUtilsService.subsetMatchOptions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        this.isActiveMatchOptions =
            this.item.isActiveMatchOptions ?? this.item.exactMatch
                ? this._blockcoreUtilsService.exactMatchOptions
                : this._blockcoreUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        this._blockcoreHorizontalNavigationComponent = this._blockcoreNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

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
