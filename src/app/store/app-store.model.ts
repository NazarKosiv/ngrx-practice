import {ShoppingList} from '../shopping-list/store/shopping-list.model';
import {AuthState} from '../auth/store/auth.model';

export interface AppState {
  shoppingList: ShoppingList;
  auth: AuthState;
}
