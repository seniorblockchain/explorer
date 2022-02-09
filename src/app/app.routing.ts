import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';



// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/blockcore'
    { path: '', pathMatch: 'full', redirectTo: 'blockcore' },
    { path: ':chain/blockcore', pathMatch: 'full', redirectTo: 'blockcore' },


    // home routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: 'blockcore', loadChildren: () => import('app/modules/dashboard/home/home.module').then(m => m.HomeModule) },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain', loadChildren: () => import('app/modules/dashboard/home/home.module').then(m => m.HomeModule) },
        ]
    },
    // explorer routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/explorer', loadChildren: () => import('app/modules/dashboard/explorer/explorer.module').then(m => m.ExplorerModule) },
        ]
    },

    // ticker routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/ticker', loadChildren: () => import('app/modules/dashboard/ticker/ticker.module').then(m => m.TickerModule) },
        ]
    },

    // About routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/about', loadChildren: () => import('app/modules/dashboard/about/about.module').then(m => m.AboutModule) },
        ]
    }

];
