import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'count', component: MyCounterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/count', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
