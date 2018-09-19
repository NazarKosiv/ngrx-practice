import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.model';
import {map, take} from 'rxjs/operators';
import {AuthState} from './store/auth.model';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      take(1),
      map((authState: AuthState) => {
        return authState.authenticated;
      })
    );
  }
}
