import { RepuestosComponent } from './features/repuestos/repuestos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepuestosModalGuardarComponent } from './features/repuestos/repuestos-modal-guardar/repuestos-modal-guardar.component';
import { EditarRepuestoComponent } from './features/repuestos/editar-repuesto/editar-repuesto.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { AgregarClienteComponent } from './features/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './features/clientes/editar-cliente/editar-cliente.component';
import { HomeComponent } from './features/home/home.component';
import { CategoriasService } from './services/categorias.service';
import { CategoriasComponent } from './features/categorias/categorias.component';
import { AgregarCategoriaComponent } from './features/categorias/agregar-categoria/agregar-categoria.component';
import { InventarioComponent } from './features/inventario/inventario.component';
import { AgregarInventarioComponent } from './features/inventario/agregar-inventario/agregar-inventario.component';
import { EditarInventarioComponent } from './features/inventario/editar-inventario/editar-inventario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repuestos', component: RepuestosComponent},
  {path: 'repuestos/agregar', component: RepuestosModalGuardarComponent},
  {path: 'repuestos/editar/:id', component: EditarRepuestoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/agregar', component: AgregarClienteComponent},
  {path: 'clientes/editar/:id', component: EditarClienteComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/agregar', component: AgregarCategoriaComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'inventario/agregar', component: AgregarInventarioComponent},
  {path: 'inventario/editar/:id', component: EditarInventarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
