import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';



// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/blockcore'
    { path: '', pathMatch: 'full', redirectTo: 'blockcore' },
    { path: ':chain', pathMatch: 'full', redirectTo: 'blockcore' },
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
    },
     // error routes
    {
        path: 'error', children: [
            { path: '404', loadChildren: () => import('app/modules/error/error-404/error-404.module').then(m => m.Error404Module) },
            { path: '500', loadChildren: () => import('app/modules/error/error-500/error-500.module').then(m => m.Error500Module) }
        ]
    },
    // 404 & Catch all
    { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/error/error-404/error-404.module').then(m => m.Error404Module) },
    { path: '**', redirectTo: '404-not-found' }


];
