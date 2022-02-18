import { Route } from '@angular/router';
import { TickerComponent } from 'app/modules/ticker/ticker.component';

export const tickerRoutes: Route[] = [
    {
        path     : '',
        component: TickerComponent
    }
];
