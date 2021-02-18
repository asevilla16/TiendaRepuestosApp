import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit, OnDestroy {

  title: string;
  orderId: any;
  proveedores: Proveedor[];
  form: FormGroup;
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
    private formBuilder: FormBuilder
  ) {
    this.ordenCompra = new Compra;
    this.unsubscribe = new Subject();
    this.buildForm();
  }

  ngOnInit(): void {
    this.getTitleAndAction();
    this.obtenerOrdenCompra();
    this.getProviders();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: [0],
      fecha: [new Date()],
      grandTotal: [0],
      idProveedor: [0],
      detallesCompra: this.formBuilder.array([])
    });
  }

  get detalles(){
    return this.form.get('detallesCompra') as FormArray;
  }

  agregarDetalle(detalle: DetalleCompra){
    const detalleFormGroup = this.formBuilder.group({
      cantidad: detalle.cantidad,
      idCompra: detalle.idCompra,
      idRepuesto: detalle.idRepuesto,
      total: detalle.total,
    })
    this.detalles.push(detalleFormGroup);
    this.ordenCompra.detallesCompra.push(this.detalles.value);
    this.obtenerRepuestosPorOrden();
  }


  getTitleAndAction(){
    this.orderId = this.route.snapshot.paramMap.get('id');

    if (this.orderId) {
      this.title = "Editar Orden de compra";
    } else {
      this.title = "Nueva Orden de compra";
    }
  }

  obtenerOrdenCompra(){
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
            this.ordenCompra = res;
            console.log(res);
          }
        );
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

  addItemToOrder(repIndex, id, orderId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      repIndex,
      id,
      orderId
    }
    this.dialogRef = this.dialog.open(DetalleCompraComponent, dialogConfig);

    this.dialogRef.afterClosed()
      .subscribe((res: DetalleCompra) => {
        console.log(res);
        this.agregarDetalle(res);
        console.log(this.form.value);
        this.updateTotal();
      });
  }

  updateTotal(){
    this.ordenCompra.detallesCompra.forEach(detalle => {
      this.total = (this.total + detalle.total);
      console.log("el total es " + this.total);
      this.form.controls.grandTotal.setValue = this.total;
    })
  }

  submit(){
    console.log(this.ordenCompra);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
