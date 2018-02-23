import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
import { DettaglioComponent } from '../dettaglio/dettaglio.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'modifica', component: ModificaComponent},
  { path: 'dettaglio/:id', component: DettaglioComponent},

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortaleRouterModule {
}
