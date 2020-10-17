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
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RepuestosModalGuardarComponent]
})
export class AppModule { }
