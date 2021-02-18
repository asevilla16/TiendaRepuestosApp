import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetalleCompra } from 'src/app/models/detalle-compra';
import { Repuesto } from 'src/app/models/repuesto';
import { DetalleOrdenCompraService } from 'src/app/services/detalleOrdenCompra.service';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  repuestoForm: FormGroup;

  repuestos: Repuesto[] = [];


  private unsubscribe: Subject<void>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleCompraComponent>,
    private _repuestosService: RepuestosService,
    private _formBuilder: FormBuilder,
    private _ordenCompraService: OrdenCompraService,
    private _detalleOrdenCompraService: DetalleOrdenCompraService
  ) {
    this.repuestoForm = this._formBuilder.group({
      id: [0],
      cantidad: [0],
      idCompra: [this.data.orderId],
      idRepuesto: [0],
      total: [0],
      precioCompra: [0]
    });
    this.unsubscribe = new Subject();
    this.getRepuestos();
  }

  ngOnInit(): void {
    console.log(this.data)
    this.getDetailById(this.data.id);
  }

  getRepuestos() {
    this._repuestosService.getRepuestos()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res) => {
          this.repuestos = res;
          console.log(res);
        }
      )
  }

  getDetailById(id) {
    if(this.data.id){
      this._detalleOrdenCompraService.getDetailById(id)
        .subscribe(
          detail => {
            this.loadForm(detail);
            console.warn(detail);
          }
        )
    }
  }

  loadForm(detalle: DetalleCompra) {
    this.repuestoForm.patchValue({
      id: detalle.id,
      cantidad: detalle.cantidad,
      idCompra: detalle.idCompra,
      precioCompra: detalle.repuesto.precioCompra,
      idRepuesto: detalle.idRepuesto,
      total: detalle.total
    });
  }

  clearForm() {
    this.repuestoForm.reset();
  }

  updatePrice(select) {
    if (select.selectedIndex == 0) {
      this.repuestoForm.controls.precioCompra.setValue(0);
    }
    else {
      this.repuestoForm.controls.precioCompra.setValue(this.repuestos[select.selectedIndex - 1].precioCompra);
    }
  }

  updateTotal() {
    let total = parseFloat((this.repuestoForm.controls.cantidad.value * this.repuestoForm.controls.precioCompra.value).toFixed(2));
    this.repuestoForm.controls.total.setValue(total);
  }

  submit() {
    let detalle: DetalleCompra = {
      id: this.repuestoForm.get('id').value,
      cantidad: this.repuestoForm.get('cantidad').value,
      idCompra: this.repuestoForm.get('idCompra').value,
      idRepuesto: this.repuestoForm.get('idRepuesto').value,
      total: this.repuestoForm.get('total').value
    }

    this.dialogRef.close(detalle);
  }


  // getOrderById(id: number){
  //   this._ordenCompraService.getOrdenCompra(id)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe((res) => {

  //     })
  // }

}
