import { Action } from '@ngrx/store';
import { Login } from './login.model';

export enum ActionTypes {
    Login = '[Login Page] Login',
    Success = '[Login Page] Success',
    Load = '[Login Page] Load',
    Loaded = '[Login Page] Loaded'
}

export class LoginAction implements Action {
    readonly type = ActionTypes.Login;

    constructor(public payload: Login) {}
}

export class LoginSuccessAction implements Action {
    readonly type = ActionTypes.Success;

    constructor(public payload: Login) {}
}

export class LoadDataAction implements Action {
    readonly type = ActionTypes.Load;

    constructor() {}
}

export class LoadedDataAction implements Action {
    readonly type = ActionTypes.Loaded;

    constructor(public payload: Login) {}
}

export type ActionsUnion = LoginAction | LoginSuccessAction | LoadDataAction | LoadedDataAction;