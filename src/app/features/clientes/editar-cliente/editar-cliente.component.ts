import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.clienteService.getCliente(id).subscribe(res => {
      this.cliente = res;
      console.log(this.cliente)
    });
  }

  editarCliente(){
    this.clienteService.putCliente(this.cliente).subscribe(() => {
      this.toastr.success("El registro fue modificado satisfactoriamente. ", "Registro Modificado. ")
      this.router.navigate(['/clientes']);
    })
  }

  cancelar(){
    this.router.navigate(['/clientes']);
  }


}
