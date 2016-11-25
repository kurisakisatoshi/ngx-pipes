import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'percent'})
export class PercentPipe implements PipeTransform {

  transform(num: number, total: number = 100, floor: boolean = false): number {
    if (isNaN(num)) {
      return num;
    }

    const percent = num * 100 / total;
    return floor ? Math.floor(percent) : percent;
  }
}
