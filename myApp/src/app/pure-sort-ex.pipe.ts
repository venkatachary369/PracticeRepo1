import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSortEx',
  pure: true
})
export class PureSortExPipe implements PipeTransform {

  transform(array: number[], args?: any): any {
    return array.sort((a:number, b:number) => b-a);
  }

}
