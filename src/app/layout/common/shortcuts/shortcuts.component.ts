/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { SetupService } from 'app/services/setup.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'shortcuts',
    templateUrl: './shortcuts.component.html',
    exportAs: 'shortcuts'
})
export class ShortcutsComponent implements OnInit, OnDestroy {
    @ViewChild('shortcutsOrigin') private _shortcutsOrigin: MatButton;
    @ViewChild('shortcutsPanel') private _shortcutsPanel: TemplateRef<any>;
    chain: any;
    mode: 'view';
    private _overlayRef: OverlayRef;

    constructor(
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
        public setup: SetupService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.setup.currentChain$.subscribe(() => {
          });
    }


    ngOnDestroy(): void {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
    }
    openPanel(): void {
        if (!this._shortcutsPanel || !this._shortcutsOrigin) {
            return;
        }

        this.mode = 'view';

        if (!this._overlayRef) {
            this._createOverlay();
        }

        this._overlayRef.attach(new TemplatePortal(this._shortcutsPanel, this._viewContainerRef));
    }

    closePanel(): void {
        this._overlayRef.detach();
    }


    private _createOverlay(): void {
        this._overlayRef = this._overlay.create({
            hasBackdrop: true,
            backdropClass: 'blockcore-backdrop-on-mobile',
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._shortcutsOrigin._elementRef.nativeElement)
                .withLockedPosition(true)
                .withPush(true)
                .withPositions([
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top'
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom'
                    },
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top'
                    },
                    {
                        originX: 'end',
                        originY: 'top',
                        overlayX: 'end',
                        overlayY: 'bottom'
                    }
                ])
        });

        // Detach the overlay from the portal on backdrop click
        this._overlayRef.backdropClick().subscribe(() => {
            this._overlayRef.detach();
        });
    }

    async selectchain(chain): Promise<void> {
        await this.setup.setChain(chain);
        const currentUrl = '/'+ chain+ '/explorer';
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);

    }
}
