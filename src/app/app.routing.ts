import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'home' },


    // home routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/dashboard/home/home.module').then(m => m.HomeModule) },
        ]
    },

    // explorer routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'explorer', loadChildren: () => import('app/modules/dashboard/explorer/explorer.module').then(m => m.ExplorerModule) },
        ]
    },

    // ticker routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'ticker', loadChildren: () => import('app/modules/dashboard/ticker/ticker.module').then(m => m.TickerModule) },
        ]
    },

    // About routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'about', loadChildren: () => import('app/modules/dashboard/about/about.module').then(m => m.AboutModule) },
        ]
    }
];
