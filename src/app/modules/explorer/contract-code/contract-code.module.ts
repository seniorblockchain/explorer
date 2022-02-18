import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from 'app/shared/pipe.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchModule } from 'app/modules/search/search.module';
import { ProgressModule } from 'app/modules/progress/progress.module';
import { ContractCodeComponent } from './contract-code.component';
import { ErrorModule } from 'app/modules/error/loading.module';
import { contractcodeRoutes } from './contract-code.routing';
@NgModule({
    declarations: [
        ContractCodeComponent
    ],
    imports: [
        RouterModule.forChild(contractcodeRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
        MatSelectModule,
        MatInputModule,
        PipeModule,
        MatTooltipModule,
        MatSnackBarModule,
        SearchModule,
        ProgressModule,
        ErrorModule
    ]
})
export class ContractCodeModule {
}
