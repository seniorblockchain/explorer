/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
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
    chainAPI: any = {};
    error: any;
    chain: any;
    endpoints: any;
    dnsendpoints: any;
    inputUrl: any;
    docUrl: any;
    errorMessage: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();


    constructor(
        private route: ActivatedRoute,
        public setup: SetupService,
        private api: ApiService,
        public cdr: ChangeDetectorRef
    ) {
        this.route.data.subscribe(data => console.log('Data :', data));

        this.load();
    }

    async load() {
        this.inputUrl = await this.api.getBaseUrl();

        if (this.inputUrl === this.setup.Explorer.Indexer.ApiUrl) {
            this.docUrl = this.setup.Explorer.Indexer.DocUrl;
        }
        else {
            this.docUrl = this.inputUrl.replace('api', 'docs');
        }
    }

    async save() {
        await this.api.setBaseUrl(this.setup.current, this.inputUrl);
        await this.load();
    }


    async discover() {

        if (this.dnsendpoints == null) {
            this.dnsendpoints = await this.api.download('https://chains.blockcore.net/services/BLOCKCORE-DNS.json');
        }

        this.endpoints = [];

        const chain = this.setup.current;

        for (let index = 0; index < this.dnsendpoints.length; index++) {
            const element = this.dnsendpoints[index];

            try {
                const res = await this.api.download(element['dns-server'] + '/api/dns/services/symbol/' + chain.toUpperCase() + '/service/Indexer');

                res.Source = element['dns-server'];
                res.Source = res.Source.replace('https://', '');
                this.endpoints.push(res);

            } catch (err) {
                if (err.message[0] === '{') {
                    this.errorMessage = JSON.parse(err.message);
                } else {
                    this.errorMessage = err;
                }
                console.log(err);
            }
        }
        await this.load();
        this.cdr.detectChanges();
    }

    async savedomain(event, item) {
        var domain = item.domain;
        domain = 'https://' + domain + '/api';
        this.inputUrl = domain;
        await this.save();
    }

    async reset() {
        await this.api.resetBaseUrl(this.setup.current);
        await this.load();
        this.cdr.detectChanges();
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    ngOnInit(): void {


    }
}
