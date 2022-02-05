import { NgModule } from '@angular/core';
import { blockcoreScrollbarDirective } from '@blockcore/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        blockcoreScrollbarDirective
    ],
    exports     : [
        blockcoreScrollbarDirective
    ]
})
export class blockcoreScrollbarModule
{
}
