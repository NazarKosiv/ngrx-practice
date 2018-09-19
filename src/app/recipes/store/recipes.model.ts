import {Recipe} from '../recipe.model';

export interface Recipes {
  recipes: Recipe[];
  editedRecipe: Recipe;
  editedRecipeId: number;
}
