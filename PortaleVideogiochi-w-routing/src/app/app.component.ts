import { Component } from '@angular/core';
import { AuthGurdaLoginService } from './auth-gurda-login.service';
import { LoginService } from './login.service';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean = false;
  constructor (private loginService: AuthGuardService){
    this.loginService.sectionSelected$.subscribe(login=>{
      this.login = login;
    });
  }
}
