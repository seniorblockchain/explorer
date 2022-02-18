import { Route } from '@angular/router';
import { TransactionComponent } from 'app/modules/explorer/transaction/transaction.component';

export const transactionRoutes: Route[] = [
    {
        path     : '',
        component: TransactionComponent

    }
];
