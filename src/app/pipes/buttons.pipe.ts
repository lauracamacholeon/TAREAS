import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttons'
})
export class ButtonsPipe implements PipeTransform {

  transform(value: any, args:number = 0): any {
   

    return value.slice(args, args + 5);
  }

}
