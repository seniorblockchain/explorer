import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { blockcoreScrollbarModule } from '@blockcore/directives/scrollbar/public-api';
import { blockcoreHorizontalNavigationBasicItemComponent } from '@blockcore/components/navigation/horizontal/components/basic/basic.component';
import { blockcoreHorizontalNavigationBranchItemComponent } from '@blockcore/components/navigation/horizontal/components/branch/branch.component';
import { blockcoreHorizontalNavigationDividerItemComponent } from '@blockcore/components/navigation/horizontal/components/divider/divider.component';
import { blockcoreHorizontalNavigationSpacerItemComponent } from '@blockcore/components/navigation/horizontal/components/spacer/spacer.component';
import { blockcoreHorizontalNavigationComponent } from '@blockcore/components/navigation/horizontal/horizontal.component';
import { blockcoreVerticalNavigationAsideItemComponent } from '@blockcore/components/navigation/vertical/components/aside/aside.component';
import { blockcoreVerticalNavigationBasicItemComponent } from '@blockcore/components/navigation/vertical/components/basic/basic.component';
import { blockcoreVerticalNavigationCollapsableItemComponent } from '@blockcore/components/navigation/vertical/components/collapsable/collapsable.component';
import { blockcoreVerticalNavigationDividerItemComponent } from '@blockcore/components/navigation/vertical/components/divider/divider.component';
import { blockcoreVerticalNavigationGroupItemComponent } from '@blockcore/components/navigation/vertical/components/group/group.component';
import { blockcoreVerticalNavigationSpacerItemComponent } from '@blockcore/components/navigation/vertical/components/spacer/spacer.component';
import { blockcoreVerticalNavigationComponent } from '@blockcore/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        blockcoreHorizontalNavigationBasicItemComponent,
        blockcoreHorizontalNavigationBranchItemComponent,
        blockcoreHorizontalNavigationDividerItemComponent,
        blockcoreHorizontalNavigationSpacerItemComponent,
        blockcoreHorizontalNavigationComponent,
        blockcoreVerticalNavigationAsideItemComponent,
        blockcoreVerticalNavigationBasicItemComponent,
        blockcoreVerticalNavigationCollapsableItemComponent,
        blockcoreVerticalNavigationDividerItemComponent,
        blockcoreVerticalNavigationGroupItemComponent,
        blockcoreVerticalNavigationSpacerItemComponent,
        blockcoreVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        blockcoreScrollbarModule
    ],
    exports     : [
        blockcoreHorizontalNavigationComponent,
        blockcoreVerticalNavigationComponent
    ]
})
export class blockcoreNavigationModule
{
}
