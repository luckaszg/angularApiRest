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
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material';
import {MY_FORMATS} from './shared/appService';
import { ListaConceptosComponent } from './conceptos/lista-conceptos/lista-conceptos.component';
import { ReglasComponent } from './reglas/reglas.component';
import { ReglaComponent } from './reglas/regla/regla.component';
import { ListaReglasComponent } from './reglas/lista-reglas/lista-reglas.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { ParametroComponent } from './parametros/parametro/parametro.component';
import { ListaParametrosComponent } from './parametros/lista-parametros/lista-parametros.component';
import { EditarReglaComponent } from './reglas/editar-regla/editar-regla.component';
import { EditarParametroComponent } from './parametros/editar-parametro/editar-parametro.component';

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
    ListaConceptosComponent,
    ReglasComponent,
    ReglaComponent,
    ListaReglasComponent,
    ParametrosComponent,
    ParametroComponent,
    ListaParametrosComponent,
    EditarReglaComponent,
    EditarParametroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
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
