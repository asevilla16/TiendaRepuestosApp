import { RepuestosComponent } from './features/repuestos/repuestos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepuestosModalGuardarComponent } from './features/repuestos/repuestos-modal-guardar/repuestos-modal-guardar.component';
import { EditarRepuestoComponent } from './features/repuestos/editar-repuesto/editar-repuesto.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { AgregarClienteComponent } from './features/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './features/clientes/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {path: 'repuestos', component: RepuestosComponent},
  {path: 'repuestos/agregar', component: RepuestosModalGuardarComponent},
  {path: 'repuestos/editar/:id', component: EditarRepuestoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/agregar', component: AgregarClienteComponent},
  {path: 'clientes/editar/:id', component: EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
