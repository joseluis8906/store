import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoginAction, LoadDataAction } from '../login-page.action';
import { FormControl } from '@angular/forms';
import { Login } from '../login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: FormControl;
  password: FormControl;

  login$: Observable<{username: string, password: string}>;

  constructor(private store: Store<Login>) {
    this.login$ = this.store.pipe(select('login'));

    this.username = new FormControl('');
    this.password = new FormControl('');
  }

  ngOnInit() {
    this.store.dispatch(new LoadDataAction());
  }

  login() {
    this.store.dispatch(new LoginAction({username: this.username.value, password: this.password.value}));
  }
}
