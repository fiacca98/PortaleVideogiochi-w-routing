import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(){

  if(this.loginService.checkData(this.username,this.password) == true){
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    this.router.navigate(["/home/"]);
  }
  else
    alert("utente non registrato")
  }

}
