import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventarios: Inventario[];


  invId: any;


  constructor(
    private inventarioService: InventarioService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void { 
    this.obtenerInventarios();

  }

  obtenerInventarios(){
    this.inventarioService.getInventarios()
      .subscribe(
        data => {
          this.inventarios = data;
        }
      )
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
