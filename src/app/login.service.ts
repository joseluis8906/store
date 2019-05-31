import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Login } from './login.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sessionStorageservice: SessionStorageService) { }

  in(login: Login): Observable<Login> {
    this.sessionStorageservice.set("login", login);
    return of<Login>(login);
  }

  load(): Observable<Login> {
    let tmp: Login = this.sessionStorageservice.get("login");
    return tmp ? of<Login>(tmp) : of({username: null, password: null});
  }
}
