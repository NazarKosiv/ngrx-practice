import {Action} from '@ngrx/store';
import {Recipe} from '../recipe.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const STORE_RECIPES = 'STORE_RECIPES';
export const ADD_RECIPES = 'ADD_RECIPES';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class AddRecipes implements Action {
  readonly type = ADD_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export class StoreRecipes implements Action {
  readonly type = STORE_RECIPES;
}

export class EditRecipe implements Action {
  readonly type = EDIT_RECIPE;
  constructor(public payload: Recipe) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type RecipesActions = AddRecipe | AddRecipes | EditRecipe | DeleteRecipe | StartEdit | StopEdit | FetchRecipes | StoreRecipes;
