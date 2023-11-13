import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <hr>
  <app-parent></app-parent>
  <hr>
  <app-parent2></app-parent2>
  <hr>
  <app-parent3></app-parent3>
  `
})
export class AppComponent {
  title = 'component-communication';
}
