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
  <app-product-list></app-product-list>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  customAnimation = [
    style({opacity: 0, transform: 'translateY(-100px)'}),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateY(0)'}))
  ];

}
