import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ConceptosComponent} from './conceptos/conceptos.component';
import {ReglasComponent} from './reglas/reglas.component';
import {ParametrosComponent} from './parametros/parametros.component';
import {EditarReglaComponent} from './reglas/editar-regla/editar-regla.component';
import {EditarParametroComponent} from "./parametros/editar-parametro/editar-parametro.component";


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'conceptos', component: ConceptosComponent},
  {
    path: 'reglas',
    children: [
      { path: '', component: ReglasComponent },
      { path: 'editar/:id', component: EditarReglaComponent}
    ]
  },
  {
    path: 'parametros',
    children: [
      { path: '', component: ParametrosComponent },
      { path: 'editar/:id', component: EditarParametroComponent }
    ]
  }
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
