import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { LoginService } from './login.service';
import { ActionTypes } from './login-page.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Login } from './login.model';
import { EMPTY } from 'rxjs';

@Injectable()
export class LoginEffects {
    
    constructor(private actions$: Actions, private loginService: LoginService) {}
    
    @Effect()
    login$ = this.actions$.pipe(
        ofType(ActionTypes.Login),
        mergeMap((value: any) => this.loginService.in(value.payload).pipe(
            map((login: Login) => ({ type: ActionTypes.Success, payload: login}))
        )),
        catchError(() => EMPTY)
    );

    @Effect()
    load$ = this.actions$.pipe(
        ofType(ActionTypes.Load),
        mergeMap(() => this.loginService.load().pipe(
            map((login: Login) => ({ type: ActionTypes.Loaded, payload: login}))
        )),
        catchError(() => EMPTY)
    );
}