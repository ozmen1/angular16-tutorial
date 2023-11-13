import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  //pipe'ın kullanıldığı değeri manipüle yani transform etmemizi sağlayan func.
  transform(value: string, a:number, b:number): string {
    return value.slice(a,b);
  }

}
