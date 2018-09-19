import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

import * as RecipesActions from './recipes.actions';
import { Recipes } from './recipes.model';

const initialState: Recipes = {
  recipes: [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ],
  editedRecipe: null,
  editedRecipeId: -1
};

export default function reducer(state = initialState, action: RecipesActions.RecipesActions) {
  switch (action.type) {
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

      case RecipesActions.ADD_RECIPES:
        return {
          ...state,
          recipes: [...action.payload]
        };

    case RecipesActions.EDIT_RECIPE:
      const recipes = [...state.recipes];
      recipes[state.editedRecipeId] = action.payload;
      return {
        ...state,
        recipes: [...recipes]
      };

    case RecipesActions.DELETE_RECIPE:
      const recipesToChange = [...state.recipes];
      recipesToChange.splice(state.editedRecipeId, 1);
      return {
        ...state,
        recipes: [...recipesToChange]
      };

    case RecipesActions.START_EDIT:
      const editedRecipe = {...state.recipes[action.payload]};
      return {
        ...state,
        editedRecipe,
        editedRecipeId: action.payload
      };

    case RecipesActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientId: -1
      };

    default:
      return state;
  }
}
