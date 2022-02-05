import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from 'app/modules/pages/about.component';

const aboutRoutes: Route[] = [
    {
        path     : '',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports     : [
        RouterModule.forChild(aboutRoutes)
    ]
})
export class AboutModule
{
}
