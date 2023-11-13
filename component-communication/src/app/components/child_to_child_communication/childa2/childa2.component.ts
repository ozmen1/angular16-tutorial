import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa2',
  template: `
  <p>ChildA2</p>
  `
})
export class Childa2Component implements OnInit {
ngOnInit(): void {
  this.data.emit("ChildA2'den gelen veri...")
}
@Output() data : EventEmitter<any> = new EventEmitter();

}
