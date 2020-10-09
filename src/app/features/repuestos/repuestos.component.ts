import { Categoria } from './../../models/categoria';
import { RepuestosService } from './../../services/repuestos.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Repuesto } from 'src/app/models/repuesto';

declare var $: any;

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit, OnChanges {

  @Input() id : number;
  @Input() modoEdicion : boolean;

  repuesto :  Repuesto = {
    id : 0,
    Codigo : '',
    Nombre : '',
    PrecioCompra : 0,
    PrecioVenta : 0,
    idCategoria : 0,
    Categoria : {id: 0, Descripcion: ''}
  };

  repuestos: Repuesto[];
  categorias: Categoria[];
  
  constructor(
    private repuestosService: RepuestosService
  ) { }

  ngOnInit(): void {
    this.obtenerRepuestos();
  }

  ngOnChanges(){
    if (this.modoEdicion === true)
    {
      this.obtenerRepuesto(this.id)
    }
    else{
      this.repuesto = {
        id : 0,
        Codigo : '',
        Nombre : '',
        PrecioCompra : 0,
        PrecioVenta : 0,
        idCategoria : 0,
        Categoria : {id: 0, Descripcion: ''}
      };
    }
  }

  obtenerRepuestos(){
    this.repuestosService.getRepuestos().subscribe(data => {
      this.repuestos = data;
    })
  }

  obtenerRepuesto(id: Number){
    this.repuestosService.getRepuesto(id).subscribe(res => {
      this.repuesto = res;
    });
  }

  guardar(repuesto: Repuesto){
    console.log(repuesto);
    this.guardarRepuesto(repuesto);
  }

  guardarRepuesto(repuesto: Repuesto){
    this.repuestosService.saveRepuesto(repuesto).subscribe((data) => {
      // if(data){
      //   this.sendModal();
      // }
    })
  }

  showModal(): void {
    $("#myModal").modal('show');
  }

}
