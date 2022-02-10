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
            { path: 'blockcore', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule) },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule) },
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
            { path: ':chain/ticker', loadChildren: () => import('app/modules/ticker/ticker.module').then(m => m.TickerModule) },
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
            { path: ':chain/explorer', loadChildren: () => import('app/modules/explorer/explorer.module').then(m => m.ExplorerModule) },
        ]
    },

    // insight routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/insight', loadChildren: () => import('app/modules/insight/insight.module').then(m => m.InsightModule) },
        ]
    },

    // network routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/network', loadChildren: () => import('app/modules/network/network.module').then(m => m.NetworkModule) },
        ]
    },


        // api routes
        {
            path: '',
            component: LayoutComponent,
            resolve: {
                chain: InitialDataResolver,
            },
            children: [
                { path: ':chain/api', loadChildren: () => import('app/modules/chainAPI/chainAPI.module').then(m => m.ChainAPIModule) },
            ]
        },


    // about routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            chain: InitialDataResolver,
        },
        children: [
            { path: ':chain/about', loadChildren: () => import('app/modules/about/about.module').then(m => m.AboutModule) },
        ]
    }

];
