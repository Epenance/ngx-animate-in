import { Directive, ElementRef, Input } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { ObserverService } from './observer.service';

@Directive({
  selector: '[animateIn]'
})
export class AnimateInDirective {
  @Input() animateInAnimation: any;

  constructor(private _observer: ObserverService,
              private el: ElementRef,
              private animationBuilder: AnimationBuilder
  ) {
    this._observer.addTarget(this.el.nativeElement, this.startAnimating.bind(this));
  }

  startAnimating(inViewport) {
    if (inViewport) {

      let animation;

      if ( this.animateInAnimation !== null && this.animateInAnimation !== undefined) {
        animation = this.animationBuilder.build(this.animateInAnimation);
      } else {
        animation = this.animationBuilder.build([
          style({opacity: 0, transform: 'translateX(-100px)'}),
          animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateX(0)'})),
        ]);
      }

      const player = animation.create(this.el.nativeElement);

      player.play();
    }
  }

}
