import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repuestosFilter'
})
export class RepuestosFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '') return value;
    const resultRep = [];
    for(const rep of value){
      if(rep.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRep.push(rep);
      };
      if(rep.codigo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRep.push(rep);
      };
    };
    return resultRep;
  }

}
