import { ActionsUnion, ActionTypes } from './login-page.action';
import { Login } from './login.model';

export interface State {
    login: Login
}

export const initialState: State = {
    login: {username: null, password: null}
}

export function loginReducer(state = initialState, action: ActionsUnion): State {
    switch(action.type) {
        case ActionTypes.Login: 
            return { ...state, login: {username: action.payload.username, password: action.payload.password }}
        
        case ActionTypes.Success:
            return { ...state, login: {username: action.payload.username, password: action.payload.password }}
        
        case ActionTypes.Load:
                return { ...state}

        case ActionTypes.Loaded:
                return { ...state, login: {username: action.payload.username, password: action.payload.password }}

        default:
            return state;
    }
}