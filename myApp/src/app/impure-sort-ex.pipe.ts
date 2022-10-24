import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureSortEx',
  pure: false
})
export class ImpureSortExPipe implements PipeTransform {

  transform(array: number[], args?: any): any {
    return array.sort((a:number, b:number) => b-a);
  }

}
