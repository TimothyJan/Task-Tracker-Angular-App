import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  months:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  transform(value: string): string {
    // YYYY-MM-DD
    return this.months[+(value.slice(5,7))] + " " + value.slice(8);
  }

}
