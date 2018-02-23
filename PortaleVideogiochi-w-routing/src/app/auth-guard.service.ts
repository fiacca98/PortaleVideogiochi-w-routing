import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuardService implements CanActivate{

  private sectionSelected: Subject<boolean> = new Subject<boolean>();
  public sectionSelected$ = this.sectionSelected.asObservable();


  canActivate() {
    if(localStorage.getItem("username") != null && localStorage.getItem("password") != null ){
      this.sectionSelected.next(true);
      return true;
    }
    else{
      this.sectionSelected.next(true);
      this.router.navigate(["/login"]);
    }
    }

  constructor(private router:Router) { 
    
  }

}
