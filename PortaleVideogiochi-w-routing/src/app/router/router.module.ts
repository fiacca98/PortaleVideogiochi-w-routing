import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
import { DettaglioComponent } from '../dettaglio/dettaglio.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'modifica/:id', component: ModificaComponent},
  { path: 'dettaglio/:id', component: DettaglioComponent},
  { path: 'login', component: LoginComponent},

  { path: "", redirectTo: "/login", pathMatch: "full" },
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
