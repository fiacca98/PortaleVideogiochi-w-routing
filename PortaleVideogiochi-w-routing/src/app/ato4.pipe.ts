import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ato4'
})
export class Ato4Pipe implements PipeTransform {

  transform(value: string): any {
    return value.replace("a","4");
  }

}
