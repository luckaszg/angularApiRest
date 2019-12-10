import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CRUDclientesComponent } from './clientes/crudclientes/crudclientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ConceptoComponent } from './conceptos/concepto/concepto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ListaClientesComponent,
    CRUDclientesComponent,
    ToolbarComponent,
    HomePageComponent,
    ConceptosComponent,
    ConceptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
