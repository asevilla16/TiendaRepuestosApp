import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RepuestosComponent } from './features/repuestos/repuestos.component';
import { HttpClientModule } from '@angular/common/http';
import { RepuestosModalGuardarComponent } from './features/repuestos/repuestos-modal-guardar/repuestos-modal-guardar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarRepuestoComponent } from './features/repuestos/editar-repuesto/editar-repuesto.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { AgregarClienteComponent } from './features/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './features/clientes/editar-cliente/editar-cliente.component';
import { RepuestosFilterPipe } from './pipes/repuestos-filter.pipe';
import { ClientesFilterPipe } from './pipes/clientes-filter.pipe';
import { HomeComponent } from './features/home/home.component';
import { CategoriasComponent } from './features/categorias/categorias.component';
import { AgregarCategoriaComponent } from './features/categorias/agregar-categoria/agregar-categoria.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InventarioComponent } from './features/inventario/inventario.component';
import { AgregarInventarioComponent } from './features/inventario/agregar-inventario/agregar-inventario.component';
import { EditarInventarioComponent } from './features/inventario/editar-inventario/editar-inventario.component';
import { InventarioFilterPipe } from './pipes/inventario-filter.pipe';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { ComprasComponent } from './features/ordenes/compras/compras.component';
import { VentasComponent } from './features/ordenes/ventas/ventas.component';
import { CompraComponent } from './features/ordenes/compras/compra/compra.component';
import { DetalleCompraComponent } from './features/ordenes/compras/detalle-compra/detalle-compra.component';
import { ProveedoresComponent } from './features/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RepuestosComponent,
    RepuestosModalGuardarComponent,
    EditarRepuestoComponent,
    ClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    RepuestosFilterPipe,
    ClientesFilterPipe,
    HomeComponent,
    CategoriasComponent,
    AgregarCategoriaComponent,
    InventarioComponent,
    AgregarInventarioComponent,
    EditarInventarioComponent,
    InventarioFilterPipe,
    LayoutComponent,
    ComprasComponent,
    VentasComponent,
    CompraComponent,
    DetalleCompraComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetalleCompraComponent]
})
export class AppModule { }
