import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RepuestosComponent } from './features/repuestos/repuestos.component';
import { HttpClientModule } from '@angular/common/http';
import { RepuestosModalGuardarComponent } from './features/repuestos/repuestos-modal-guardar/repuestos-modal-guardar.component';
import { RepuestosModalEditarComponent } from './features/repuestos/repuestos-modal-editar/repuestos-modal-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RepuestosComponent,
    RepuestosModalGuardarComponent,
    RepuestosModalEditarComponent
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
