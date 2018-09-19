import * as ShoppingListActions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientId: -1
};

export default function reducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingListActions.EDIT_INGREDIENT:
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientId] = action.payload;
      return {
        ...state,
        ingredients: [...ingredients]
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      const ingredientsToChange = [...state.ingredients];
      ingredientsToChange.splice(state.editedIngredientId, 1);
      return {
        ...state,
        ingredients: [...ingredientsToChange]
      };

    case ShoppingListActions.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};
      return {
        ...state,
        editedIngredient,
        editedIngredientId: action.payload
      };

    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientId: -1
      };

    default:
      return state;
  }
}
