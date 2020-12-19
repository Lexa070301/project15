import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return items;
    } else {
      const filteredItems = items.filter((item) => (item.name.indexOf(searchStr) !== -1) || (item.surname.indexOf(searchStr) !== -1));
      return filteredItems;
    }
  }
}
