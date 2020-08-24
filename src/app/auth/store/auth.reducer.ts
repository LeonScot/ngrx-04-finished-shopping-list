import { User } from '../user.model';
import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

const loginProcedure = ({email, userId, token, expirationDate}) => {
  const user = new User(userId, email, token, expirationDate);
  return user;
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, {email, userId, token, expirationDate}) => ({
    ...state,
    user: loginProcedure({email, userId, token, expirationDate})
  })),
  on(AuthActions.logout, state => ({
    ...state,
    user: null
  })),
);
