import {ShoppingList} from '../shopping-list/store/shopping-list.model';
import {Recipes} from '../recipes/store/recipes.model';
import {AuthState} from '../auth/store/auth.model';

export interface AppState {
  shoppingList: ShoppingList;
  recipes: Recipes;
  auth: AuthState;
}
