import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repuestosFilter'
})
export class RepuestosFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultRep = [];
    for(let rep of value){
      if(rep.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRep.push(rep);
      };
    };
    return resultRep;
  }

}
