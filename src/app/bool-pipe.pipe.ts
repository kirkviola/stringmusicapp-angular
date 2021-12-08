import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolPipe'
})
export class BoolPipePipe implements PipeTransform {

  transform(bool: boolean): string {
    
    let output: string = bool ? "Yes" : "No";
    return output; 
  }

}
