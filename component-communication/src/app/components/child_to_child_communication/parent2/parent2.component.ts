import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
<div style="background-color: blueviolet;">
<p>Parent3</p>
    <app-childa2 (data)="childData($event)"></app-childa2>
    <br>
    <app-childb2 [data]="childa2Message"></app-childb2>
</div>
  `
})
export class Parent2Component {
  childa2Message: string = '';
  childData(message:string){
    this.childa2Message = message;
  }
}
