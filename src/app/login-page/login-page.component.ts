import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Login } from '../login-page.action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: FormControl;
  password: FormControl;

  login$: Observable<{username: string, password: string}>;

  constructor(private store: Store<{username: string, password: string}>) {
    this.login$ = this.store.pipe(select('login'));

    this.username = new FormControl('');
    this.password = new FormControl('');
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Login({username: this.username.value, password: this.password.value}));
  }

}
