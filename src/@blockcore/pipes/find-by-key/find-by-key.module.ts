import { NgModule } from '@angular/core';
import { blockcoreFindByKeyPipe } from '@blockcore/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        blockcoreFindByKeyPipe
    ],
    exports     : [
        blockcoreFindByKeyPipe
    ]
})
export class blockcoreFindByKeyPipeModule
{
}
