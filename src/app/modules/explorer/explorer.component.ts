import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { ExplorerService } from 'app/modules/explorer/explorer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService } from 'app/services/setup.service';
import { CommonModule } from '@angular/common';

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
    info: any;
    node: any;
    blockchain: any;
    network: any;
    configuration: any;
    consensus: any;
    peers: any;
    blocks: any;
    timerInfo: any;
    timerBlocks: any;
    errorBlocks: string;
    errorInfo: string;
    subscription: any;
    explorerLable: string = 'Explorer';
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

        // Get the blocks data
        this._explorerService.blocksdata$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                this.blocks = data;
                this.cdr.detectChanges();
            });


        // Get the info data
        this._explorerService.infodata$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                try {
                    this.info = data;

                    this.node = this.info.node;
                    this.blockchain = this.node.blockchain;
                    this.network = this.node.network;
                    this.configuration = this.info.configuration;
                    this.consensus = this.configuration?.consensus;
                    this.errorInfo = null;
                } catch (error) {
                    this.errorInfo = error;
                }
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
