import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {ShoppingList} from './store/shopping-list.model';
import {AppState} from '../store/app-store.model';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList$: Observable<ShoppingList>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingList$ = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
