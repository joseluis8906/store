import { ActionsUnion, ActionTypes } from './login-page.action';

export interface State {
    username: string;
    password: string;
}

export const initialState: State = {
    username: null,
    password: null,
}

export function loginReducer(state = initialState, action: ActionsUnion): State {
    switch(action.type) {
        case ActionTypes.Login: 
            return {...state, username: action.payload.username, password: action.payload.password}
        
        default:
            return state;
    }
}