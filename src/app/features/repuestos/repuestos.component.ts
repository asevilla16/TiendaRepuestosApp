import { Categoria } from './../../models/categoria';
import { RepuestosService } from './../../services/repuestos.service';
import { Component, OnInit } from '@angular/core';
import { Repuesto } from 'src/app/models/repuesto';
import { RepuestosModalGuardarComponent } from './repuestos-modal-guardar/repuestos-modal-guardar.component';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  repuestos: Repuesto[];
  categorias: Categoria[];
  
  constructor(
    private repuestosService: RepuestosService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerRepuestos();
  }

  obtenerRepuestos(){
    this.repuestosService.getRepuestos().subscribe(data => {
      this.repuestos = data;
    })
  }

  eliminarRepuesto(id: Number){
    if(confirm("Desea eliminar este registro?")) {
      this.repuestosService.deleteRepuesto(id).subscribe((data) => {
        this.toastr.warning("El repuesto se elimino", "Repuesto eliminado");
        this.obtenerRepuestos();
      })
    }
  }

  showSaveModal(){
    $("#myModal").modal('show');
  }

  showEditModal(){
    $("#myEditModal").modal('show');
  }

}
