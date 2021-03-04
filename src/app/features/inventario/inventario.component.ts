import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { finalize, map, takeUntil } from "rxjs/operators";
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventarios: Inventario[];

  filtroInv = '';

  invId: any;

  pActual: number = 1;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private inventarioService: InventarioService,
    private repuestoService: RepuestosService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void { 
    this.obtenerInventarios();

  }

  obtenerInventarios(){
    this.inventarioService.getInventarios()
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.obtenerInfoRepuestos();
        })
      )
      .subscribe(
        data => {
          this.inventarios = data;
        }
      )
  }

  obtenerInfoRepuestos() {
    this.inventarios.forEach(response => {
      this.repuestoService.getRepuesto(response.idRepuesto)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(data => {
          response.repuesto = data;
        })
    })
  }

  eliminarInventario(id: number){
    if(confirm("Desea eliminar el inventario?")){
      this.inventarioService.deleteInventario(id).subscribe((data)=> {
        this.toastr.warning("El registro se elimino", "Registro eliminado");
        this.obtenerInventarios();
      });
    }
  }

  editar(id: number){
    this.route.navigate(['/inventario/editar/', id]);
  }


  crearExistencia(){
    this.route.navigate(['/inventario/agregar']);
  }

}
