import {Component, OnInit} from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.model';
import {Observable} from 'rxjs';
import {AuthState} from '../../auth/store/auth.model';
import * as firebase from 'firebase';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>;

  constructor(private dataStorageService: DataStorageService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.SignOut());
  }
}
