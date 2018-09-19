import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';

import * as AuthActions from './auth.actions';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.model';
import {Router} from '@angular/router';

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
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      }),
      mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNUP
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      })
    );

  @Effect()
  authSignIn = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .pipe(
      map((action: AuthActions.TrySignIn) => action.payload),
      switchMap((data: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(data.username, data.password));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      }),
      mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      })
    );

  @Effect({dispatch: false})
    authLogOut = this.actions$.ofType(AuthActions.SIGNOUT)
      .pipe(
        tap(() => {
          this.router.navigate(['/']);
        })
      );
  constructor(private actions$: Actions, private store: Store<AppState>, private router: Router) {}
}
