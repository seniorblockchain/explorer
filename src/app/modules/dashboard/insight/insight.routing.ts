import { Route } from '@angular/router';
import { InsightComponent } from 'app/modules/dashboard/insight/insight.component';
import { InsightResolver } from 'app/modules/dashboard/insight/insight.resolvers';

export const insightRoutes: Route[] = [
    {
        path     : '',
        component: InsightComponent,
        resolve  : {
            data: InsightResolver
        }
    }
];
