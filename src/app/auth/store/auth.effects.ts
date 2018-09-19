import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as AuthActions from './auth.actions';
import {map, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignUp = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .pipe(
      map((action: AuthActions.TrySignUp) => {
        return action.payload;
      }),
      switchMap((data: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(data.username, data.password));
      })
    );
  constructor(private actions$: Actions) {}
}
