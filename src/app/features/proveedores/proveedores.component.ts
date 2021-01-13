import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[];

  constructor(
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }


  crearProveedor(){
    console.log('Proveedor creado');
  }

  obtenerProveedores(){
    this.proveedoresService.getProveedores().subscribe(
      data => {
        console.log(data);
        this.proveedores = data;
      }
    )
  }

}
