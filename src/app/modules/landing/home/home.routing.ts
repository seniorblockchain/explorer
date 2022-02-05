import { Route } from '@angular/router';
import { HomeComponent } from 'app/modules/landing/home/home.component';
import { HomeResolver } from 'app/modules/landing/home/home.resolvers';

export const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent,
        resolve  : {
            data: HomeResolver
        }
    }
];
