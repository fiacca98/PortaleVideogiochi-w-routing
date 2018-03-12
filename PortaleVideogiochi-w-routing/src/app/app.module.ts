import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortaleRouterModule } from './router/router.module';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { ModificaComponent } from './modifica/modifica.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { GameListService } from './game-list.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthGurdaLoginService } from './auth-gurda-login.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListaComponent,
    ModificaComponent,
    DettaglioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PortaleRouterModule,
    ReactiveFormsModule
  ],
  providers: [GameListService, LoginService, AuthGuardService, AuthGurdaLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
