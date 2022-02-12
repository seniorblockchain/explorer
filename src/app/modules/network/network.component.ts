/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { NetworkService } from 'app/modules/network/network.service';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';

@Component({
    selector       : 'network',
    templateUrl    : './network.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent implements OnInit, OnDestroy
{
    chartprice: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    networkLable: string = 'Network';
    network: any = {};
    error: any;
    chain: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _networkService: NetworkService,
        private _router: Router,
        private api: ApiService,
        public setup: SetupService,
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

        this._networkService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                this.data = data;

            });


    }


    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }



}
