import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { blockcoreFullscreenModule } from '@blockcore/components/fullscreen';
import { blockcoreLoadingBarModule } from '@blockcore/components/loading-bar';
import { blockcoreNavigationModule } from '@blockcore/components/navigation';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { CoinModule } from 'app/layout/common/coin/coin.module';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialLayoutComponent } from 'app/layout/layouts/horizontal/material/material.component';

@NgModule({
    declarations: [
        MaterialLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        blockcoreFullscreenModule,
        blockcoreLoadingBarModule,
        blockcoreNavigationModule,
        LanguagesModule,
        SearchModule,
        ShortcutsModule,
        CoinModule,
        SharedModule
    ],
    exports     : [
        MaterialLayoutComponent
    ]
})
export class MaterialLayoutModule
{
}
