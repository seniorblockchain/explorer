/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, HostBinding, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService, HttpError } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';
import { ScrollEvent } from 'app/shared/scroll.directive';

@Component({
    selector: 'app-orphans-component',
    templateUrl: './orphans.component.html'
})

export class OrphansComponent implements OnInit, OnDestroy {
    @HostBinding('class.content-centered-top') hostClass = true;

    info: any;
    node: any;
    blockchain: any;
    network: any;
    configuration: any;
    consensus: any;
    peers: any;
    blocks: any = null;

    timerInfo: any;
    timerBlocks: any;
    count = 0;
    maxCount = 2;
    link: string;
    limit = 20;
    loading = false;
    subscription: any;
    total: any;
    displayBlock: any;

    @HostListener('scroll', ['$event'])
    scrollHandler(event) {
    }

    constructor(public api: ApiService, public setup: SetupService) {

    }

    async ngOnInit() {
        this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
            await this.updateBlocks('/api/query/block/orphan?offset=&limit=' + this.limit);
        });
    }

    ngOnDestroy(): void {
        clearTimeout(this.timerInfo);
        clearTimeout(this.timerBlocks);
        this.subscription.unsubscribe();
    }

    async updateBlocks(url) {
        if (!url) {
            return;
        }

        const baseUrl = this.api.baseUrl.replace('/api', '');
        // For the block scrolling (using link http header), we must manually set full URL.
        const response = await this.api.request(baseUrl + url);

        this.total = response.headers.get('Pagination-Total');
        const linkHeader = response.headers.get('Link');
        const links = this.api.parseLinkHeader(linkHeader);

        // This will be set to undefined/null when no more previous links is available.
        this.link = links.previous;

        // When the offset is not set (0), we should reverse the order of items.
        const list = await response.json();

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

        if (!this.blocks) {
            this.blocks = [];
        }

        this.blocks = [...this.blocks, ...list];
        this.count++;
    }

    async showBlockDetails(hash) {

        const baseUrl = this.api.baseUrl.replace('/api', '');

        const response = await this.api.request(baseUrl + '/api/query/block/orphan/' + hash);

        this.displayBlock = await response.json();
    }


    async onScroll(event: ScrollEvent) {

        if (event.isReachingBottom) {
            this.loading = true;

            setTimeout(async () => {
                await this.updateBlocks(this.link);
                this.loading = false;
            });

        }
        if (event.isReachingTop) {
        }
        if (event.isWindowEvent) {
        }
    }
}

