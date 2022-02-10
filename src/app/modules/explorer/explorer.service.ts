/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SetupService } from 'app/services/setup.service';
import { ApiService } from 'app/services/api.service';
@Injectable({
    providedIn: 'root'
})
export class ExplorerService {
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
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
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, public setup: SetupService,
        private api: ApiService,) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    async getData(): Promise<Observable<any>> {
       await this.updateBlocks();
       return  this.blocks ;
    }

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnDestroy(): void {
        clearTimeout(this.timerInfo);
        clearTimeout(this.timerBlocks);
        this.subscription.unsubscribe();
    }

    async updateBlocks() {
        if (this.setup.isCurrentRootChain) {
            return;
        }

        try {
            const list = await this.api.getBlocks(0, 4);

            // When the offset is not set (0), we should reverse the order of items.
            list.sort((b, a) => {
                if (a.blockIndex === b.blockIndex) {
                    return 0;
                }
                if (a.blockIndex < b.blockIndex) {
                    return -1;
                }
                if (a.blockIndex > b.blockIndex) {
                    return 1;
                }
            });

            this.blocks = list;
            this._data.next(this.blocks);
            this.errorBlocks = null;
        } catch (error) {
            this.errorBlocks = error;
        }

        this.timerBlocks = setTimeout(async () => {
            await this.updateBlocks();
            this._data.next(this.blocks);
        }, 15000);
    }

    async updateInfo() {
        if (this.setup.isCurrentRootChain) {
            return;
        }

        try {
            this.info = await this.api.getInfo();

            this.node = this.info.node;
            this.blockchain = this.node.blockchain;
            this.network = this.node.network;
            this.configuration = this.info.configuration;
            this.consensus = this.configuration?.consensus;
            this.errorInfo = null;
        } catch (error) {
            this.errorInfo = error;
        }

        this.timerInfo = setTimeout(async () => {
            await this.updateInfo();
        }, 15000);
    }


}
