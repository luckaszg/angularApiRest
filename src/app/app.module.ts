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
import { PaginatePipe } from './pipes/paginate.pipe';
import {DateAdapter, MAT_DATE_LOCALE, MatPaginatorIntl} from '@angular/material';
import {CustomMatPaginatorIntl} from './paginator-es';
import {ListaClientesServiceService} from './clientes/lista-clientes/lista-clientes-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material';
import {MY_FORMATS} from './shared/appService';
import { ListaConceptosComponent } from './conceptos/lista-conceptos/lista-conceptos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ListaClientesComponent,
    CRUDclientesComponent,
    ToolbarComponent,
    HomePageComponent,
    ConceptosComponent,
    ConceptoComponent,
    PaginatePipe,
    ListaConceptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [ListaClientesServiceService, {
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
     { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
