import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blockcoreMasonryComponent } from '@blockcore/components/masonry/masonry.component';

@NgModule({
    declarations: [
        blockcoreMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        blockcoreMasonryComponent
    ]
})
export class blockcoreMasonryModule
{
}
