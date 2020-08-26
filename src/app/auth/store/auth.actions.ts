import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const LOGIN_START = '[Auth Component] Login Start';
export const LOGIN = '[Auth Component] Login';
export const LOGOUT = '[Auth Component] Logout';

export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>());
export const login = createAction(LOGIN, props<{email: string, userId: number, token: string, expirationDate: Date}>());
export const logout = createAction(LOGOUT);
