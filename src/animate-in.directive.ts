import { Directive, ElementRef, Input } from '@angular/core';
import {
  animate, AnimationBuilder, AnimationFactory, AnimationMetadata, AnimationPlayer,
  style
} from '@angular/animations';
import { ObserverService } from './observer.service';

@Directive({
  selector: '[animateIn]'
})
export class AnimateInDirective {
  @Input() animateInAnimation: AnimationMetadata|AnimationMetadata[];
  player: AnimationPlayer;

  constructor(private _observer: ObserverService,
              private el: ElementRef,
              private animationBuilder: AnimationBuilder
  ) {
    let animation: AnimationFactory;

    if ( this.animateInAnimation !== null && this.animateInAnimation !== undefined) {
      animation = this.animationBuilder.build(this.animateInAnimation);
    } else {
      animation = this.animationBuilder.build([
        style({opacity: 0, transform: 'translateX(-100px)'}),
        animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateX(0)'})),
      ]);
    }

    if (this._observer.isSupported()) {
      this.player = animation.create(this.el.nativeElement);
      this.player.init();
      this._observer.addTarget(this.el.nativeElement, this.startAnimating.bind(this));
    }
  }

  /**
   * Builds and triggers the animation
   * when it enters the viewport
   * @param {boolean} inViewport
   */
  startAnimating(inViewport: boolean) {
    if (inViewport) {
      this.player.play();
    }
  }

}
