import { Categoria } from './../../../models/categoria';
import { RepuestosService } from './../../../services/repuestos.service';
import { CategoriasService } from './../../../services/categorias.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-repuestos-modal',
  templateUrl: './repuestos-modal.component.html',
  styleUrls: ['./repuestos-modal.component.css']
})
export class RepuestosModalComponent implements OnInit {

  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriasService,
    private repuestosService: RepuestosService
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    
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
