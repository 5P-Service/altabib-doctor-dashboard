import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(list: Array<any>, keywork: string): Array<{ groupName: string, items: any }> {

    let groups: Array<string> = list.map(item => item[keywork]).filter((item, index, self) => self.indexOf(item) === index)
    return Array.from(groups, group => {
      let items: Array<any> = new Array();
      list.forEach(item => {
        if (String(group).toUpperCase() == String(item[keywork]).toUpperCase()) items.push(item);
      })
      return {
        groupName: group, items: items
      };
    });
  }

}