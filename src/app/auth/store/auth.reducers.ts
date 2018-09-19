import {AuthState} from './auth.model';
import * as AuthActions from './auth.actions';

const initialState: AuthState = {
  token: null,
  authenticated: false
};

export default function reducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    case AuthActions.SIGNUP:
      return {
        ...state,
        authenticated: true
      };

    case AuthActions.SIGNIN:
      return {
        ...state,
        authenticated: true
      };

    case AuthActions.SIGNOUT:
      return {
        token: null,
        authenticated: false
      };

    default:
      return state;
  }
}
