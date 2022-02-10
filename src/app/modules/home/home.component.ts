/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { HomeService } from 'app/modules/home/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService } from 'app/services/setup.service';

@Component({
    selector       : 'home',
    templateUrl    : './home.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy
{
    searchForm: FormGroup;
    chartprice: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    tickers: any = {};
    selectNetwork: string = 'Select Network';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _homeService: HomeService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        public setup: SetupService,
    )
    {
    }

    ngOnInit(): void
    {
        this.searchForm = this._formBuilder.group({
            name    : ['Blockcore']
        });
        this._homeService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.tickers = data;
                console.log(data);
            });

    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getChangeClass(value: number) {
        if (value < 0) {
          return 'negative';
        } else {
          return 'positive';
        }
      }

}
