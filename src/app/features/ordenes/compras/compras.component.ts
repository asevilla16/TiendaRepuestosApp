import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Compra } from 'src/app/models/compra';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { finalize, take, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit, OnDestroy {

  ordenesCompra: Compra[];

  private unsubscribe: Subject<void>;

  constructor(
    private ordenCompraService: OrdenCompraService,
    private repuestoService: RepuestosService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.obtenerOrdenesCompra();
  }

  obtenerOrdenesCompra() {
    this.ordenCompraService.getOrdenesCompra()
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.obtenerRepuestosPorOrden();
        })
      )
      .subscribe(
        data => {
          this.ordenesCompra = data;
          console.log(data);
        }
      );
  }

  obtenerRepuestosPorOrden() {
    this.ordenesCompra.forEach(res => {
      res.detallesCompra.forEach(response => {
        this.repuestoService.getRepuesto(response.idRepuesto)
          .pipe(takeUntil(this.unsubscribe) )
          .subscribe(data => {
            response.repuesto = data;
          })
      })
    })
  }

  details(id){
    console.log("details for order #: " + id);
    this.router.navigate(['/ordenes/compras/detalles-compra/', id]);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  crearOrdenCompra() {
    console.log("Orden de compra creada");
  }

}
