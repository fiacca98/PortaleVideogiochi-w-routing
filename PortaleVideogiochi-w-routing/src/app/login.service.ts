import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  
  username: String = "admin";
  password: String = "admin";

  constructor() { }

  checkData(username: string, password: string): boolean {
    if(this.username == username && this.password == password)
      return true;
    else
    return false; 
  }

}
