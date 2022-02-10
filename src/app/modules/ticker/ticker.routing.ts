import { Route } from '@angular/router';
import { TickerComponent } from 'app/modules/ticker/ticker.component';
import { TickerResolver } from 'app/modules/ticker/ticker.resolvers';

export const tickerRoutes: Route[] = [
    {
        path     : '',
        component: TickerComponent,
        resolve  : {
            data: TickerResolver
        }
    }
];
