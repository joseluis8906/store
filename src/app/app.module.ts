import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { loginReducer } from './login-page.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count: counterReducer, login: loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
