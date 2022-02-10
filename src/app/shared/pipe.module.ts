import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizePipe } from './size.pipe';
import { AgoPipe } from './ago.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { AmountMarkdownPipe, AmountPipe } from './amount';


@NgModule({
  declarations: [SizePipe,AgoPipe,TimestampPipe ,AmountPipe,AmountMarkdownPipe],
  imports: [
    CommonModule
  ]
  ,exports: [SizePipe,AgoPipe ,TimestampPipe ,AmountPipe,AmountMarkdownPipe],
})
export class PipeModule { }
