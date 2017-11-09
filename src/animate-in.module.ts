import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateInDirective } from './animate-in.directive';
import { ObserverService } from './observer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AnimateInDirective,
  ],
  declarations: [
    AnimateInDirective
  ],
  providers: [
    ObserverService
  ],
})
export class AnimateInModule { }
