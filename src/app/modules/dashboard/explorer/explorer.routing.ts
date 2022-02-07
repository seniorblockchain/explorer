import { Route } from '@angular/router';
import { ExplorerComponent } from 'app/modules/dashboard/explorer/explorer.component';
import { ExplorerResolver } from 'app/modules/dashboard/explorer/explorer.resolvers';

export const explorerRoutes: Route[] = [
    {
        path     : '',
        component: ExplorerComponent,
        resolve  : {
            data: ExplorerResolver
        }
    }
];
