/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable use-isnan */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { SetupService } from 'app/services/setup.service';
import { CommonModule } from '@angular/common';
import { ApiService } from 'app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'explorer',
    templateUrl: './explorer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent implements OnInit, OnDestroy {
    searchTerm: any;
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
    scheme = JSON.parse(localStorage.getItem('config')).scheme;
    killed: boolean;
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        public setup: SetupService,
        public cdr: ChangeDetectorRef,
        public com: CommonModule,
        private api: ApiService,
        private _snackBar: MatSnackBar,
    ) {
        this._router.onSameUrlNavigation = 'reload';
        this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
            if (!this.setup.isCurrentRootChain) {
                await this.updateInfo();
                await this.updateBlocks();
            }
        });
    }

    async ngOnInit() {
    }

    ngOnDestroy(): void {
        this.killed = true;

        if (this.timerInfo) {
            clearTimeout(this.timerInfo);
            this.timerInfo = null;
        }

        if (this.timerBlocks) {
            clearTimeout(this.timerBlocks);
            this.timerBlocks = null;
        }
        this.subscription.unsubscribe();
    }

    async updateBlocks() {
        if (this.killed) {
            return;
        }
        if (this.setup.isCurrentRootChain) {
            return;
        }
        try {
            const list = await this.api.getBlocks('', 4);
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
            this.errorBlocks = null;
        } catch (error) {
            this.errorBlocks = error;
        }
        this.cdr.detectChanges();
        this.timerBlocks = setTimeout(async () => {
            await this.updateBlocks();
            this.cdr.detectChanges();
        }, 15000);
    }

    async updateInfo() {
        if (this.killed) {
            return;
        }
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
        this.cdr.detectChanges();

        this.timerInfo = setTimeout(async () => {
            await this.updateInfo();
            this.cdr.detectChanges();
        }, 15000);
    }



}
