import { Categoria } from './../../models/categoria';
import { RepuestosService } from './../../services/repuestos.service';
import { Component, OnInit } from '@angular/core';
import { Repuesto } from 'src/app/models/repuesto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  repuestos: Repuesto[];
  categorias: Categoria[];
  filtroRep = '';
  
  constructor(
    private repuestosService: RepuestosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerRepuestos();
  }

  obtenerRepuestos(){
    this.repuestosService.getRepuestos().subscribe(data => {
      this.repuestos = data;
      console.log(this.repuestos);
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

  editar(id: Number){
    this.router.navigate(['/repuestos/editar', id]);
  }

}
