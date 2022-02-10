import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from './pipe.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PipeModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [

    ]
})
export class SharedModule
{
}
