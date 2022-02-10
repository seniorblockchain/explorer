import { Route } from '@angular/router';
import { NetworkComponent } from 'app/modules/network/network.component';
import { NetworkResolver } from 'app/modules/network/network.resolvers';

export const networkRoutes: Route[] = [
    {
        path     : '',
        component: NetworkComponent,
        resolve  : {
            data: NetworkResolver
        }
    }
];
