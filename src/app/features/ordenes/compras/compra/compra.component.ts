import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
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
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit, OnDestroy {

  title: string;
  orderId: any;
  proveedores: Proveedor[];
  ordenCompra: Compra;
  total: any;

  dialogRef: MatDialogRef<DetalleCompraComponent>;

  private unsubscribe: Subject<void>;

  constructor(
    private ordenCompraService: OrdenCompraService,
    private router: Router,
    private route: ActivatedRoute,
    private repuestoService: RepuestosService,
    private proveedoresService: ProveedoresService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.ordenCompra = new Compra();
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.getTitleAndAction();
    this.obtenerOrdenCompra();
    this.getProviders();
  }

  getTitleAndAction() {
    this.orderId = this.route.snapshot.paramMap.get('id');

    if (this.orderId) {
      this.title = "Editar Orden de compra";
    } else {
      this.title = "Nueva Orden de compra";
    }
  }

  obtenerOrdenCompra() {
    if (this.orderId) {
      this.ordenCompraService.getOrdenCompra(this.orderId)
        .pipe(
          finalize(() => {
            this.obtenerRepuestosPorOrden();
          }),
          takeUntil(this.unsubscribe)
        )
        .subscribe(
          res => {
            this.ordenCompra = {
              id: res.id,
              fecha: res.fecha,
              grandTotal: res.grandTotal,
              estado: res.estado,
              idProveedor: res.idProveedor,
              detallesCompra: res.detallesCompra,
              proveedor: res.proveedor
            };
            console.log(res);
          }
        );
    } else {
      this.ordenCompra = {
        id: 0,
        fecha: new Date(),
        grandTotal: 0,
        estado: '',
        idProveedor: 0,
        detallesCompra: []
      }
    }
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

  addItemToOrder(repIndex: number, item: DetalleCompra, orderId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      repIndex,
      item,
      orderId
    }
    this.dialogRef = this.dialog.open(DetalleCompraComponent, dialogConfig);

    this.dialogRef.afterClosed()
      .subscribe(res => {
        if (res != null) {
          if(repIndex == null){
            this.ordenCompra.detallesCompra.push(res);
          } else {
            this.ordenCompra.detallesCompra[repIndex] = res;
          }
          this.obtenerRepuestosPorOrden();
          this.updateTotal();
        }
      });
  }

  // updateTotal(){
  //   this.ordenCompra.detallesCompra.forEach(detalle => {
  //     this.total = (this.total + detalle.total);
  //     console.log("el total es " + this.total);
  //     this.ordenCompra.grandTotal = this.total;
  //   })
  // }

  updateTotal() {
    this.ordenCompra.grandTotal = this.ordenCompra.detallesCompra.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    this.ordenCompra.grandTotal = parseFloat(this.ordenCompra.grandTotal.toFixed(2));
  }

  submit() {
    console.log(this.ordenCompra);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(){
    if (!this.orderId){
      this.create(this.ordenCompra);
    } else {
      this.update(this.ordenCompra)
    }
  }

  create(order){
    this.ordenCompraService.createOrdenCompra(order)
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.router.navigate(['/ordenes/compras']);
        })
      )
      .subscribe(
        res => {
          this.toastr.success(
            "Se ha creado la orden de compra",
            "Orden Creada" 
          )
        },
        error => {
          this.toastr.error(
            "Ha ocurrido un error",
            "Error"
          )
        }
      );
  }

  update(order){
    this.ordenCompraService.editOrdenCompra(order)
      .pipe(
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.router.navigate(['/ordenes/compras']);
        })
      )
      .subscribe(
        res => {
          this.toastr.success(
            "Se ha editado la orden de compra",
            "Orden Editada" 
          )
        },
        error => {
          this.toastr.error(
            "Ha ocurrido un error",
            "Error"
          )
        }
      )
  }

}
