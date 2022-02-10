import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizePipe } from './size.pipe';
import { AgoPipe } from './ago.pipe';
import { TimestampPipe } from './timestamp.pipe';


@NgModule({
  declarations: [SizePipe,AgoPipe,TimestampPipe],
  imports: [
    CommonModule
  ]
  ,exports: [SizePipe,AgoPipe ,TimestampPipe],
})
export class PipeModule { }
