import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
import { DettaglioComponent } from '../dettaglio/dettaglio.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardService } from '../auth-guard.service';
import { AuthGurdaLoginService } from '../auth-gurda-login.service';



const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'lista', component: ListaComponent, canActivate: [AuthGuardService]},
  { path: 'modifica/:id', component: ModificaComponent, canActivate: [AuthGuardService]},
  { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGurdaLoginService]},

  { path: "dettaglio", redirectTo: "/lista", pathMatch: "prefix"},

  { path: "modifica", redirectTo: "/modifica/x", pathMatch: "prefix"},
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
