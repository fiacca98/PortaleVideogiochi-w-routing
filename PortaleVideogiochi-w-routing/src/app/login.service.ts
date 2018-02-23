import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  
  username: String = "admin";
  password: String = "admin";

  private sectionSelected: Subject<boolean> = new Subject<boolean>();
  public sectionSelected$ = this.sectionSelected.asObservable();

  constructor() { }

  checkData(username: string, password: string): boolean {
    if(this.username == username && this.password == password)
    {
      this.sectionSelected.next(true);
      return true;
    }
    else
    {
      this.sectionSelected.next(false);
      return false; 
    }
  }

}
