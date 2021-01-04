import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inventarioFilter'
})
export class InventarioFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '') return value;
    const resultInv = [];
    for(const inv of value){
      if(inv.repuesto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultInv.push(inv);
      };
      if(inv.repuesto.codigo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultInv.push(inv);
      };
      if(inv.repuesto.categoria?.descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultInv.push(inv);
      };
    }
    return resultInv;
  }

}
