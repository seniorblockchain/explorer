import { Route } from '@angular/router';
import { ExplorerComponent } from 'app/modules/explorer/explorer.component';
import { ExplorerResolver } from 'app/modules/explorer/explorer.resolvers';

export const explorerRoutes: Route[] = [
    {
        path     : '',
        component: ExplorerComponent,
        resolve  : {
            data: ExplorerResolver
        }
    }
];
