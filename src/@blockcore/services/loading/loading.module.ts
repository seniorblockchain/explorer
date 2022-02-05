import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { blockcoreLoadingInterceptor } from '@blockcore/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: blockcoreLoadingInterceptor,
            multi   : true
        }
    ]
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class blockcoreLoadingModule
{
}
