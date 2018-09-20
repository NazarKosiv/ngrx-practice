import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipesActions from '../store/recipes.actions';
import {Subscription} from 'rxjs';
import {RecipesFeatureState} from '../store/recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<RecipesFeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.store.dispatch(new RecipesActions.StartEdit(this.id));
          this.subscription = this.store.select('recipes').subscribe(data => {
              this.id = data.editedRecipeId;
              this.recipe = data.editedRecipe;
          });
        }
      );
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe());
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.store.dispatch(new RecipesActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
