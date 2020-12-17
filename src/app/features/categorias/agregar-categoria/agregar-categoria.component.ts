import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  formulario: FormGroup;

  categoria: Categoria;

  constructor(
    private categoriaService: CategoriasService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      descripcion: ['', [Validators.required]]
    });
  }

  guardar() {
    if (this.formulario.invalid) {
      return;
    }

    let cat: Categoria = this.formulario.value

    this.categoriaService.saveCategories(cat).subscribe((data) => {
      this.formulario.reset();
      this.router.navigate(['/repuestos']);
      this.toastr.success('Categoria guardada', 'Se creo la nueva categoria');
    })
  }

  cancelar(){
    this.router.navigate(['/repuestos']);
  }

}
