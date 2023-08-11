import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(source: Array<any>, pattern: string, options: { keyword?: string, maxRows?: number } = { maxRows: 10 }): Array<any> {
    let filtred = pattern.length > 0 ? source.filter(item => this._normalizeValue(options.keyword ? item[options.keyword] : item).startsWith(pattern.toLocaleLowerCase())) : source;
    let res = filtred.slice(0, options.maxRows || 10);
    return res;
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}