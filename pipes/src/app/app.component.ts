import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
  {{name | slice: 1:3}}
  {{1000 | currency}}<br>
  {{"doldur be meyhaneci, boş kalmasın kadehin...." | custom : 10 : 19}}
  
  `
})
export class AppComponent {
  //pipe'ı programatik olarak kullanmak
  constructor(private custom: CustomPipe){
    console.log(custom.transform("sdfsdfdsdf", 3, 6))
  }
  name = 'ahmet';
}
