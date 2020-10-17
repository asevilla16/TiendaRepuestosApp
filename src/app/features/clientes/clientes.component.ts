import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService: ClientesService,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.obtenerClientes();
    console.log(this.clientes)
  }

  obtenerClientes(){
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  eliminarCliente(id: Number){
    if(confirm("Desea eliminar este registro?")) {
      this.clienteService.deleteCliente(id).subscribe((data) => {
        this.toastr.warning("El repuesto se elimino", "Repuesto eliminado");
        this.obtenerClientes();
      })
    }
  }

  editar(id: Number){
    this.route.navigate(['/clientes/editar', id])
  }

}
