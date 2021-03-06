import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-store.model';
import authReducer from '../auth/store/auth.reducers';
import shoppingListReducer from '../shopping-list/store/shopping-list.reducers';

export default function reducers(): ActionReducerMap<AppState> {
  return {
    shoppingList: shoppingListReducer,
    auth: authReducer
  };
}
