import {Component, OnInit} from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.model';
import {Observable} from 'rxjs';
import {AuthState} from '../../auth/store/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
