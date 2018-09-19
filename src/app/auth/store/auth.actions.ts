import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export class TrySignUp implements Action {
  readonly type = TRY_SIGNUP;
  constructor(public payload: {username: string, password: string}) {}
}

export class TrySignIn implements Action {
  readonly type = TRY_SIGNIN;
  constructor(public payload: {username: string, password: string}) {}
}

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

export type AuthActions = SetToken | SignIn | SignOut | SignUp | TrySignUp | TrySignIn;
