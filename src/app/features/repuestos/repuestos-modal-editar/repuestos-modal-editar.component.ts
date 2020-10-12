import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-repuestos-modal-editar',
  templateUrl: './repuestos-modal-editar.component.html',
  styleUrls: ['./repuestos-modal-editar.component.css']
})
export class RepuestosModalEditarComponent implements OnInit {

  formulario: FormGroup;
  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriasService,
    private repuestosService: RepuestosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: 0,
      Codigo: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      PrecioCompra: ['', [Validators.required]],
      PrecioVenta: ['', [Validators.required]],
      idCategoria: ['', [Validators.required]]
    });

    this.obtenerCategorias();
  }

  sendModal(): void {
    this.hideModal();
  }

  hideModal():void {
    document.getElementById('close-edit-modal').click();
  }

  guardar(){

  }

  obtenerCategorias(){
    this.categoriaService.getCategories().subscribe(data => {
      this.categorias = data;
    })
  }

}
