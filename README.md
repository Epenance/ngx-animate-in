# ngx-animate-in
A small directive to help you animate components in as they enter the viewport.

#### Browser support
The directive uses the experimental Intersection Observer API. Because of this its only supported in evergreen browsers, meaning anything but IE pretty much. 

Check the [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility) table carefully before using this in production.

## Installation

```
npm install --save ngx-animate-in
```

## Usage
First, import the AnimateInModule in your app module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimateInModule } from 'ngx-animate-in';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateInModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then add the animateIn attribute to the element(s) you wish to animate in once its visible in the viewport.

```html
<div class="greetings center">
  <div>
    <h1 animateIn>{{'Hello from App Component'}}</h1>
  </div>
</div>
```

If you look in your browser, your element should now be sliding in from the left while fading in, as soon as 10% of it is within the viewport (These options can be changed).


## Using your own animations

You can also specify your own animation by passing in an animation array in the "animateInAnimation" attribute on your elements.

It expects one or more animations of the type [AnimationMetadata](https://angular.io/api/animations/AnimationMetadata) so you can build it just like you would with any [Angular animation](https://angular.io/api/animations/animation).

Example of a custom animation:

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<div class="greetings center">
    <div>
      <h1 animateIn>{{'Hello from App Component'}}</h1>
      <h2 animateIn [animateInAnimation]="customAnimation">Custom animation!</h2>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  customAnimation = [
    style({opacity: 0, transform: 'rotate(355deg)'}),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'rotate(0deg)'}))
  ];
  
}
```

## Changing the default config
By default the root element of which we detect the intersection is the viewport. We also have a threshold of 10% meaning that the animation will not trigger until the element has 10% of its body within the viewport. Its also possible to define a offset of when it should start if you want it to trigger when its 100px before the viewport as an example. By default this is 0px.

The option type looks like this:
```typescript
interface ObserverServiceConfig {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}
```

To override the defaults simple pass a new config object into the forRoot function on the module like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimateInModule } from 'ngx-animate-in';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateInModule.forRoot({
      threshold: 0,
      rootMargin: '-100px'
    })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
You only need to define the options you want changed, the rest will fall back to its defaults.

As of right now, these options will affect all elements that uses the directive, it will be possible to define option groups later that you can then attach your elements to.

## License

MIT © [Martin Hobert](http://mereommig.dk)
