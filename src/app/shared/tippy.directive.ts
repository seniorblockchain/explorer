/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
import { ApiService } from '../services/api.service';
import { SetupService } from '../services/setup.service';

@Directive({
    /* tslint:disable-next-line */
    selector: '[tippy]'
})
export class TippyDirective implements OnInit {

    @Input() public tippyOptions: Object;
    @Input() public tippyType: string;

    constructor(
        private el: ElementRef,
        private api: ApiService,
        private setup: SetupService,
        ) {
        this.el = el;

        tippy.setDefaultProps({
            delay: [200, null],
            duration: [100, 0],
            interactiveBorder: 30,
            arrow: true,
            allowHTML: true,
            interactive: true
        });
    }

    public ngOnInit() {
        const options: any = this.tippyOptions || {};
        const element = this.el.nativeElement;
        const tippyType = this.tippyType;
        const api = this.api;
        const theme =JSON.parse(localStorage.getItem('config')).scheme;
        options.theme = theme ==='dark' ? 'light' : 'dark'; // Tooltip theme is cached, so if user changes mode it is not reflected until reload of page.
        options.content = 'Loading...';
        options.onShow = (instance: any) => {
            const address = element.innerText;
            if (tippyType === 'address') {
                api.getAddress(address).then((response) => {
                    const balance = this.setup.transformFormat(response.balance);
                    instance.setContent('<div class="tooltip">Balance: <span class="number">' + balance + '</span></div>');

                }).catch((error) => {
                    instance.setContent('Request failed. Try again soon.');
                    console.error(error);
                });
            }
        };

        tippy(element, options);
    }
}
