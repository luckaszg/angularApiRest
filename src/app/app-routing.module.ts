import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ConceptosComponent} from './conceptos/conceptos.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'conceptos', component: ConceptosComponent}
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
