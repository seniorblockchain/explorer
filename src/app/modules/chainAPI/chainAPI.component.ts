/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { ChainAPIService } from 'app/modules/chainAPI/chainAPI.service';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';

@Component({
    selector: 'chainAPI',
    templateUrl: './chainAPI.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainAPIComponent implements OnInit, OnDestroy {
    chartprice: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    chainAPILable: string = 'ChainAPI';
    subscription: any;
    chainAPI: any = {};
    error: any;
    chain: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _chainAPIService: ChainAPIService,
        private _router: Router,
        private api: ApiService,
        public setup: SetupService,
    ) {
    }
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {

        // Get the data
        this._chainAPIService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;
            });
    }
}
