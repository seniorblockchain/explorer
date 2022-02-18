import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CoinComponent } from 'app/layout/common/coin/coin.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        CoinComponent
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        CoinComponent
    ]
})
export class CoinModule
{
}
