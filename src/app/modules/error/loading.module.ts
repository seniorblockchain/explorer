import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorComponent } from './error.component';
@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule
    ], exports: [
        ErrorComponent
    ]
})
export class ErrorModule {
}
