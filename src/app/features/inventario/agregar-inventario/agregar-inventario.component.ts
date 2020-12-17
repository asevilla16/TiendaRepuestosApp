import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { Repuesto } from 'src/app/models/repuesto';
import { InventarioService } from 'src/app/services/inventario.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.css']
})
export class AgregarInventarioComponent implements OnInit {

  form: FormGroup;
  repuestos: Repuesto[];
  
  constructor(
    private repuestosService: RepuestosService,
    private inventarioService: InventarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idRepuesto: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      
    });

    this.obtenerRepuestos();
  }

  guardar(){
    if(this.form.invalid){
      return;
    }

    let inv: Inventario = this.form.value;
    this.inventarioService.saveInventario(inv).subscribe(
      (data) => {
        this.form.reset();
        this.cancelar();
        this.toastr.success('Se ha registrado la cantidad en existencia', 'Inventario actualizado');
      }
    )
  }


  obtenerRepuestos(){
    this.repuestosService.getRepuestos().subscribe(
      data => {
        this.repuestos = data;
      }
    )
  }

  cancelar(){
    this.router.navigate(['/inventario'])
  }

}
