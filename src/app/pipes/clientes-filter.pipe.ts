import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientesFilter'
})
export class ClientesFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '') return value;
    const resultCli = [];
    for(let cli of value){
      if(cli.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCli.push(cli);
      };
      if(cli.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCli.push(cli);
      };
      if(cli.telefono.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCli.push(cli);
      };
      if(cli.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCli.push(cli);
      };
    };
    return resultCli;
  }

}
