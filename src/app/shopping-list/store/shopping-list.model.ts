import {Ingredient} from '../../shared/ingredient.model';

export interface ShoppingList {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientId: number;
}
