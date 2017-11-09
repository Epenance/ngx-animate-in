# ngx-animate-in
A small directive to help you animate components in as they enter the DOM.

## Installation

```
npm install --save ngx-animate-in
```

Add the browser BrowserAnimationsModule and AnimateInModule to your app root module

```
BrowserAnimationsModule,
AnimateInModule
```
Your module should now be up and ready!

## Usage

Add the "animateIn" attribute to any given element to animate it in once it enters the viewport.

You can also specify your own animation by passing in an animation array in the "animateInAnimation" attribute on your elements.

## License

MIT © [Martin Hobert](http://mereommig.dk)