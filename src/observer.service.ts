import { Injectable } from '@angular/core';

@Injectable()
export class ObserverService {
  options = {
    rootMargin: '0px',
    threshold: 0.1
  };

  watching: Array<any> = [];

  observer = new IntersectionObserver(this.handleEvent.bind(this), this.options);

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
