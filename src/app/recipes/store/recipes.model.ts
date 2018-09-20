import {Recipe} from '../recipe.model';
import {AppState} from '../../store/app-store.model';

export interface Recipes {
  recipes: Recipe[];
  editedRecipe: Recipe;
  editedRecipeId: number;
}

export interface RecipesFeatureState extends AppState {
  recipes: Recipes;
}
