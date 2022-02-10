import { Route } from '@angular/router';
import { ChainAPIComponent } from 'app/modules/chainAPI/chainAPI.component';
import { ChainAPIResolver } from 'app/modules/chainAPI/chainAPI.resolvers';

export const chainAPIRoutes: Route[] = [
    {
        path     : '',
        component: ChainAPIComponent,
        resolve  : {
            data: ChainAPIResolver
        }
    }
];
