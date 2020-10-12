import { Categoria } from './../../../models/categoria';
import { RepuestosService } from './../../../services/repuestos.service';
import { CategoriasService } from './../../../services/categorias.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Repuesto } from 'src/app/models/repuesto';

declare var $: any;

@Component({
  selector: 'app-repuestos-modal',
  templateUrl: './repuestos-modal.component.html',
  styleUrls: ['./repuestos-modal.component.css']
})
export class RepuestosModalComponent implements OnInit {

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

  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriasService,
    private repuestosService: RepuestosService
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
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

  obtenerRepuesto(id: Number){
    this.repuestosService.getRepuesto(id).subscribe(res => {
      this.repuesto = res;
    });
  }

  obtenerCategorias(){
    this.categoriaService.getCategories().subscribe(data => {
      this.categorias = data;
    })
  }

  showModal():void {
    $("#myModal").modal('show');
  }
  
  sendModal(): void {
    this.hideModal();
  }

  hideModal():void {
    document.getElementById('close-modal').click();
  }

}
