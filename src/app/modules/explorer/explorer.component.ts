import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { ExplorerService } from 'app/modules/explorer/explorer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService } from 'app/services/setup.service';
import {CommonModule} from '@angular/common';
@Component({
    selector: 'explorer',
    templateUrl: './explorer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent implements OnInit, OnDestroy {
    searchForm: FormGroup;
    chartprice: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    blocks: any;
    explorerLable: string = 'BTC Explorer';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _explorerService: ExplorerService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        public setup: SetupService,
        public cdr: ChangeDetectorRef,
        public com: CommonModule
     ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.searchForm = this._formBuilder.group({
            name: ['Brian Hughes'],
            username: ['brianh']
        });
        // Get the data
        this._explorerService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                this.blocks = data;
                this.cdr.detectChanges();
            });


    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
