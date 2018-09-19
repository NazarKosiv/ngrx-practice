import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.model';
import {map} from 'rxjs/operators';
import {AuthState} from './store/auth.model';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(map((authState: AuthState) => authState.authenticated));
  }
}
