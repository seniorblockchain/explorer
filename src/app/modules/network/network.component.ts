/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';

@Component({
    selector       : 'network',
    templateUrl    : './network.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent implements OnInit, OnDestroy {

    info: any;
    node: any;
    blockchain: any;
    network: any;
    configuration: any;
    consensus: any;
    peers: any;
    subscription: any;
    subscription2: any;

    constructor(private api: ApiService, public setup: SetupService, private router: Router,private cd: ChangeDetectorRef) {

      this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
        await this.update();
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    async ngOnInit(): Promise<any> {

    }

    async update() {
      this.info = await this.api.getInfo();

      this.node = this.info.node;
      this.blockchain = this.node.blockchain;
      this.network = this.node.network;
      this.configuration = this.info.configuration;
      this.consensus = this.configuration?.consensus;

      this.peers = await this.getPeers();
      this.cd.detectChanges();
    }

    async getPeers() {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const list = await this.api.getPeers(yesterday);
      const uniqueVersions = [...new Set(list.map(peer => peer.subVer))];

      const peerList = uniqueVersions.map((version) => {
        const item = {};
        item['version'] = version;
        item['peers'] = list.filter(y => y.subVer === version);
        return item;
      });

      return peerList;
    }
  }

