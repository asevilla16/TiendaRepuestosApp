import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { Repuesto } from 'src/app/models/repuesto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

declare var $: any;

@Component({
  selector: 'app-repuestos-modal-guardar',
  templateUrl: './repuestos-modal-guardar.component.html',
  styleUrls: ['./repuestos-modal-guardar.component.css']
})
export class RepuestosModalGuardarComponent implements OnInit {

  formulario: FormGroup;
  repuesto: Repuesto;
  categorias: Categoria[];

  constructor(
    private repuestosService: RepuestosService,
    private categoriaService: CategoriasService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { 
    
  }

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

  showModal():void {
    $("#myModal").modal('show');
  }

  sendModal(): void {
    this.hideModal();
  }

  hideModal():void {
    document.getElementById('close-modal').click();
  }

  guardar(){
    console.log();
    this.guardarRepuesto();
  }

  guardarRepuesto(){
    let rep: Repuesto = this.formulario.value
    this.repuestosService.saveRepuesto(rep).subscribe((data) => {
        this.formulario.reset();
        this.sendModal();
        this.toastr.success('Repuesto Guardado', 'El repuesto fue guardado');
    })
  }

  obtenerCategorias(){
    this.categoriaService.getCategories().subscribe(data => {
      this.categorias = data;
    })
  }

}
