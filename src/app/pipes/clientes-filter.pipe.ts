import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientesFilter'
})
export class ClientesFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCli = [];
    for(let cli of value){
      if(cli.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCli.push(cli);
      };
    };
    return resultCli;
  }

}
