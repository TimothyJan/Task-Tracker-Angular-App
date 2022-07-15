import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  ampm:string = "AM";
  hour:number = 0;

  transform(value: string): string {
    // HH-MM
    this.hour = +(value.slice(0,2));
    if(this.hour<=12){
      this.ampm = "AM";
    } else{
      this.ampm = "PM";
    }

    if(this.hour === 12 || this.hour === 24){
      this.hour = 12;
    }else{
      this.hour = this.hour%12;
    }

    return this.hour + ":" + value.slice(3) + " " + this.ampm;
  }

}
