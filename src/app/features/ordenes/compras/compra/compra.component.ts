import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Compra } from 'src/app/models/compra';
import { DetalleCompra } from 'src/app/models/detalle-compra';
import { Proveedor } from 'src/app/models/proveedor';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { DetalleCompraComponent } from '../detalle-compra/detalle-compra.component';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit, OnDestroy {

  orderId: any;
  proveedores: Proveedor[];

  ordenCompra: Compra;

  private unsubscribe: Subject<void>;

  constructor(
    private ordenCompraService: OrdenCompraService,
    private router: Router,
    private route: ActivatedRoute,
    private repuestoService: RepuestosService,
    private proveedoresService: ProveedoresService,
    private dialog: MatDialog
  ) {
    this.ordenCompra = new Compra();
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');

    this.ordenCompraService.getOrdenCompra(this.orderId)
      .pipe(
        finalize(() => {
          this.obtenerRepuestosPorOrden();
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        res => {
          this.ordenCompra = res;
          console.log(res);
        }
      );

    this.getProviders();
  }

  obtenerRepuestosPorOrden() {
    this.ordenCompra.detallesCompra.forEach(response => {
      this.repuestoService.getRepuesto(response.idRepuesto)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(data => {
          response.repuesto = data;
        })
    })
  }

  getProviders() {
    this.proveedoresService.getProveedores()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        res => {
          this.proveedores = res;
        }
      )
  }

  addItemToOrder(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(DetalleCompraComponent, dialogConfig);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
