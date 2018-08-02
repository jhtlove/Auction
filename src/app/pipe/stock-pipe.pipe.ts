import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../stock/stock.service';

@Pipe({
  name: 'stockPipe'
})
export class StockPipePipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    if (!keyword || !field) {
      return list;
    }
    return list.filter(x => {
      const item = x[field].toLowerCase();
      return item.indexOf(keyword) >= 0;
    });
  }

}
