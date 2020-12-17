import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { Repuesto } from 'src/app/models/repuesto';
import { InventarioService } from 'src/app/services/inventario.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.css']
})
export class EditarInventarioComponent implements OnInit {

  repuestos: Repuesto[];

  inventario: Inventario;

  constructor(
    private repuestosService: RepuestosService,
    private inventarioService: InventarioService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.inventario = new Inventario();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.repuestosService.getRepuestos().subscribe(res => {
      this.repuestos = res;
    })

    this.inventarioService.getInventario(id).subscribe(res => {
      this.inventario = res;
      console.log(this.inventario);
    })
  }

  editar(){
    this.inventarioService.putInventario(this.inventario).subscribe(data => {
      this.router.navigate(['/inventario']);
      this.toastr.success("Se actualizo correctamente la cantidad en existencia", "Inventario actualizado");
    })
  }

  cancelar(){
    this.router.navigate(['/inventario']);
  }

}
