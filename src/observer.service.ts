import { Injectable, Optional } from '@angular/core';

export class ObserverServiceConfig {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export type CallbackType = (inViewport: boolean) => void;

export interface WatchedItem {
  element: Element;
  callback: CallbackType;
}

@Injectable()
export class ObserverService {
  options: ObserverServiceConfig = {
    rootMargin: '0px',
    threshold: 0.1
  };

  supported = false;

  watching: Array<WatchedItem> = [];

  observer: IntersectionObserver | null;

  /**
   * Assigns the user config if they wish to
   * override the defaults by using forRoot
   * @param {ObserverServiceConfig} config
   */
  constructor(@Optional() config: ObserverServiceConfig) {
    this.supported = 'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window;
    if (config) {
      this.options = Object.assign({}, this.options, config);
    }

    this.observer = this.supported ? new IntersectionObserver(this.handleEvent.bind(this), this.options) : null;
  }

  /**
   * Handles events made by the observer
   * @param {IntersectionObserverEntry[]} entries
   */
  handleEvent(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const target = this.watching.find((element) => {
        return element.element === entry.target;
      });

      if (entry.isIntersecting) {
        this.observer.unobserve(entry.target);

        target.callback(true);
      }
    });
  }

  /**
   * Adds the target to our array so we can call its
   * call back when it enters the viewport
   * @param {Element} el
   * @param {CallbackType} callback
   */
  addTarget(el: Element, callback: CallbackType): void {
    this.observer.observe(el);

    this.watching.push({
      element: el,
      callback: callback
    });
  }

  isSupported() {
    return this.supported;
  }

}
