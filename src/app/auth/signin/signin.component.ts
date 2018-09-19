import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.model';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignIn({username: email, password}));
  }

}
