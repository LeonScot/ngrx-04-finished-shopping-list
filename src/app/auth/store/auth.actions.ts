import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const LOGIN = '[Auth Component] Login';
export const LOGOUT = '[Auth Component] Logout';

export const login = createAction(LOGIN, props<{email: string, userId: number, token: string, expirationDate: Date}>());
export const logout = createAction(LOGOUT);