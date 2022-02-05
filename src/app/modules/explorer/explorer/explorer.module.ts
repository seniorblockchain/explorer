import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExplorerComponent } from 'app/modules/explorer/explorer/explorer.component';

const explorerRoutes: Route[] = [
    {
        path     : '',
        component: ExplorerComponent
    }
];

@NgModule({
    declarations: [
        ExplorerComponent
    ],
    imports     : [
        RouterModule.forChild(explorerRoutes)
    ]
})
export class ExplorerModule
{
}
