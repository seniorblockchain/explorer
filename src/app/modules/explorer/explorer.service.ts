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
    private _blockdata: BehaviorSubject<any> = new BehaviorSubject(null);
    private _infodata: BehaviorSubject<any> = new BehaviorSubject(null);

    info: any;
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
    get blocksdata$(): Observable<any> {
        return this._blockdata.asObservable();
    }
    get infodata$(): Observable<any> {
        return this._infodata.asObservable();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    async getBlocksData(): Promise<Observable<any>> {
        await this.updateBlocks();
        return this.blocks;
    }
    async getInfoData(): Promise<Observable<any>> {
        await this.updateInfo();
        return this.info;
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
            this._blockdata.next(this.blocks);
            this.errorBlocks = null;
        } catch (error) {
            this.errorBlocks = error;
        }

        this.timerBlocks = setTimeout(async () => {
            await this.updateBlocks();
            this._blockdata.next(this.blocks);
        }, 15000);
    }

    async updateInfo() {
        if (this.setup.isCurrentRootChain) {
            return;
        }

        try {
            this.info = await this.api.getInfo();
            this._infodata.next(this.info);
            this.errorInfo = null;
        } catch (error) {
            this.errorInfo = error;
        }

        this.timerInfo = setTimeout(async () => {
            await this.updateInfo();
            this._infodata.next(this.info);
        }, 15000);
    }


}
