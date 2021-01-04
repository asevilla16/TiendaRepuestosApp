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
    InventarioFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RepuestosModalGuardarComponent]
})
export class AppModule { }
