import { Injectable, Optional } from '@angular/core';

export class ObserverServiceConfig {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable()
export class ObserverService {
  options: ObserverServiceConfig = {
    rootMargin: '0px',
    threshold: 0.1
  };

  watching: Array<any> = [];

  observer: IntersectionObserver = new IntersectionObserver(this.handleEvent.bind(this), this.options);

  constructor(@Optional() config: ObserverServiceConfig) {
    if (config) {
      this.options = Object.assign({}, this.options, config);
    }

    console.log(this.options);
  }

  handleEvent(entries) {
    entries.forEach((entry) => {
      const target = this.watching.find((element) => {
        return element.element === entry.target;
      });

      if (entry.isIntersecting) {
        this.observer.unobserve(entry.target);

        target.callback(true);
      }
    });
  }

  addTarget(el, callback) {
    this.observer.observe(el);

    this.watching.push({
      element: el,
      callback: callback
    });
  }

}
