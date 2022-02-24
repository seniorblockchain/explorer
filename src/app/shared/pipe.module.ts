import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizePipe } from './size.pipe';
import { AgoPipe } from './ago.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { AmountMarkdownPipe, AmountPipe } from './amount';
import { ScrollDirective } from './scroll.directive';
import { YesPipe } from './yes.pipe';
import { TippyDirective } from './tippy.directive';
import { SuccessPipe } from './success.pipe';


@NgModule({
  declarations: [SuccessPipe,SizePipe,AgoPipe,TimestampPipe ,AmountPipe,AmountMarkdownPipe,ScrollDirective,YesPipe,TippyDirective],
  imports: [
    CommonModule
  ]
  ,exports: [SuccessPipe,SizePipe,AgoPipe ,TimestampPipe ,AmountPipe,AmountMarkdownPipe,ScrollDirective,YesPipe,TippyDirective],
})
export class PipeModule { }
