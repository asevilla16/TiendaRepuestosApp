import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  formulario: FormGroup;

  cliente: Cliente;

  constructor(
    private clienteService: ClientesService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      Nombres: ['', [Validators.required]],
      Apellidos: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      Correo: ['', [Validators.required]]
    });
  }

  guardar(){
    if(this.formulario.invalid){
      return;
    }

      let cli: Cliente = this.formulario.value
      this.clienteService.saveCliente(cli).subscribe((data) => {
          this.formulario.reset();
          this.router.navigate(['/clientes']);
          this.toastr.success('Cliente Guardado', 'El repuesto fue guardado');


      })
    
  }

  cancelar(){
    this.router.navigate(['/clientes']);
  }

}
