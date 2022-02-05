import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'home' },


    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.HomeModule) },
        ]
    },

    // Explorer routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'explorer', loadChildren: () => import('app/modules/explorer/explorer/explorer.module').then(m => m.ExplorerModule) },
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
            { path: 'about', loadChildren: () => import('app/modules/pages/about.module').then(m => m.AboutModule) },
        ]
    }
];
