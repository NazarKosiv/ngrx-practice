import {Action} from '@ngrx/store';

export const SET_TOKEN = 'SET_TOKEN';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export class SignIn implements Action {
  readonly type = SIGNIN;
}

export class SignOut implements Action {
  readonly type = SIGNOUT;
}

export class SignUp implements Action {
  readonly type = SIGNUP;
}

export type AuthActions = SetToken | SignIn | SignOut | SignUp;
