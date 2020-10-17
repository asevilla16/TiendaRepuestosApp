import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  categorias: Categoria[];
  
  createMode: boolean = true;
  repuesto: Repuesto;

  constructor(
    private repuestosService: RepuestosService,
    private categoriaService: CategoriasService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      Codigo: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      PrecioCompra: ['', [Validators.required]],
      PrecioVenta: ['', [Validators.required]],
      idCategoria: ['', [Validators.required]]
    });

    this.obtenerCategorias();
  }


  guardar(){
    if(this.formulario.invalid){
      return;
    }

    if(this.createMode){
      let rep: Repuesto = this.formulario.value
      this.repuestosService.saveRepuesto(rep).subscribe((data) => {
          this.formulario.reset();
          this.router.navigate(['/repuestos']);
          this.toastr.success('Repuesto Guardado', 'El repuesto fue guardado');


      })
    }
  }
  
  obtenerCategorias(){
    this.categoriaService.getCategories().subscribe(data => {
      this.categorias = data;
    })
  }

  cancelar(){
    this.router.navigate(['/repuestos'])
  }

}
